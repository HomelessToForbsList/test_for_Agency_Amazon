import React from "react";
import {  useLocation, useNavigate, useSearchParams } from "react-router-dom";

import { Table, Container, Pagination, Spinner, Collapse } from "react-bootstrap";

import ThButton from "../ThButton/ThButton";
import Filter from "../Filter/Filter";

import {fetchData, getDataType} from "../../utils/fetchData"

import type { AccountType, ProfileType,CampaignType } from "../../types";


export const TableComponent = () => {

  const url = useLocation()
  const dataType = getDataType(url.pathname)
  const [searchParams, setSearchParams ] = useSearchParams()
  const [data, setData] = React.useState<AccountType[] | ProfileType[] | CampaignType[]>([])
  const [isLoading, setIsLoading] = React.useState(false)
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    const getData = async () =>{
      setIsLoading(true)
      const res = await fetchData({url: url.pathname,searchParams, page})
      setIsLoading(false)
      setData(res)
    }
    getData()
  }, [url, searchParams, page]);

  const navigate = useNavigate()

  const handleSort = (query: string) => {
    setSearchParams({'sortBy': query}, {replace: true})
  }

  return (
    <Container fluid className='d-flex flex-column align-items-center'>
      <Container fluid className="d-flex flex-row justify-content-center mb-2">
        {data.length > 0 && !isLoading && <span style={{flexBasis:'10%'}}></span>}
        <h2 style={{flexBasis:'80%'}}>{dataType.toUpperCase()}</h2>
        {data.length > 0 && !isLoading && <div style={{flexBasis:'10%'}}><Filter values={Object.keys(data[0])} onSubmit={setSearchParams}/></div>}
      </Container>
      {isLoading ?
        <Spinner animation="grow"/>
        :
        data.length> 0 ?
        <Collapse in={true} appear >
        <Container fluid>
        <Table bordered hover responsive>
          <thead>
            <tr>
            {data.length > 0 &&
              <>
                <th className="align-middle">#</th>
                {'accountId' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Account Id" active={searchParams.get('sortBy') ==='accountId'} onClick={() => handleSort('accountId')} />
                </th>}
                {'email' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Email" active={searchParams.get('sortBy') ==='email'} onClick={() => handleSort('email')} />
                </th>}
                {'authToken' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Auth Token" active={searchParams.get('sortBy') ==='authToken'} onClick={() => handleSort('authToken')} />
                </th>}
                {'creationDate' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Creation Date" active={searchParams.get('sortBy') ==='creationDate'} onClick={() => handleSort('creationDate')} />
                </th>}
                {'profileId' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Profile Id" active={searchParams.get('sortBy') ==='profileId'} onClick={() => handleSort('profileId')} />
                </th>}
                {'country' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Country" active={searchParams.get('sortBy') ==='country'} onClick={() => handleSort('country')} />
                </th>}
                {'marketplace' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Marketplace" active={searchParams.get('sortBy') ==='marketplace'} onClick={() => handleSort('marketplace')} />
                </th>}
                {'campaignId' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Campaign Id" active={searchParams.get('sortBy') ==='campaignId'} onClick={() => handleSort('campaignId')} />
                </th>}
                {'clicks' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Clicks" active={searchParams.get('sortBy') ==='clicks'} onClick={() => handleSort('clicks')} />
                </th>}
                {'cost' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Cost" active={searchParams.get('sortBy') ==='cost'} onClick={() => handleSort('cost')} />
                </th>}
                {'date' in data[0] &&
                <th className="align-middle">
                  <ThButton name="Date" active={searchParams.get('sortBy') ==='date'} onClick={() => handleSort('date')} />
                </th>}
              </>
            }
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
                const id = 'campaignId' in item ? item.campaignId : 'profileId' in item ? item.profileId : item.accountId
                return(
                  <tr key={id} className="cursor-p" onClick={
                    () => dataType !== 'campaigns' && navigate(dataType === 'accounts' ? `/account/${id}/profiles` : `${url.pathname}/${id}/campaigns` )
                    }>
                    <td>{index + 1}</td>
                    {dataType === 'accounts' && 'accountId' in item && <td>{item.accountId}</td>}
                    {dataType === 'accounts' && 'email' in item && <td>{item.email}</td>}
                    {dataType === 'accounts' && 'authToken' in item && <td>{item.authToken}</td>}
                    {dataType === 'accounts' && 'creationDate' in item && <td>{(new Date(item.creationDate)).toUTCString()}</td>}
                    {dataType === 'profiles' && 'profileId' in item && <td>{item.profileId}</td>}
                    {dataType === 'profiles' && 'country' in item && <td>{item.country}</td>}
                    {dataType === 'profiles' && 'marketplace' in item && <td>{item.marketplace}</td>}
                    {dataType === 'campaigns' && 'campaignId' in item && <td>{item.campaignId}</td>}
                    {dataType === 'campaigns' && 'clicks' in item && <td>{item.clicks}</td>}
                    {dataType === 'campaigns' && 'cost' in item && <td>{item.cost}</td>}
                    {dataType === 'campaigns' && 'date' in item && <td>{(new Date(item.date)).toUTCString()}</td>}
                  </tr>
                )
              }
            )}
          </tbody>
        </Table>
        </Container>
        </Collapse>
        :
        <h2>No data</h2>
      }
      <Pagination className="mt-3">
          <Pagination.Prev disabled={page === 1} onClick={() => setPage(prev => prev -1)}/>
            <Pagination.Item disabled >{page}</Pagination.Item>
          <Pagination.Next onClick={() => setPage(prev => prev +1)}/>
      </Pagination>
    </Container>
  );
};
