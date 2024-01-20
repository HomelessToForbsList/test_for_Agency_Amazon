
import type {dataType, AccountType, ProfileType, CampaignType} from '../types'


type Params = {
  url: string,
  searchParams: URLSearchParams,
  page: number
}

type Response = Promise< AccountType[] | ProfileType[] | CampaignType[]>

export const getDataType = (pathname: string) :dataType => {
  const path = pathname.split('/').reverse()
  return path[0] === 'campaigns' ? 'campaigns' : path[0] === 'profiles' ? 'profiles' : 'accounts'
}

export async function fetchData(params: Params): Response {
  let url: URL
  const pathname = params.url.split('/').reverse()
  switch (pathname[0]) {
    case 'accounts':
      url = new URL(import.meta.env.VITE_ACCOUNTS_API_URL)
      break;
    case 'profiles':
      url = new URL(import.meta.env.VITE_PROFILES_API_URL)
      url.searchParams.append('refToAccountId', `refToAccountId ${pathname[1]}`)
      break;
    case 'campaigns':
      url = new URL(import.meta.env.VITE_CAMPAIGNS_API_URL)
      url.searchParams.append('refToProfileId', `refToProfileId ${pathname[1]}`)
    break;
    default:
      url = new URL(import.meta.env.VITE_ACCOUNTS_API_URL)
      break;
  }
  params.searchParams.forEach(( value, key) =>{
    url.searchParams.append(key,value)
  })
  const limit = import.meta.env.VITE_LIMIT
  url.searchParams.set('limit', limit)
  url.searchParams.set('page', params.page.toString())
  const response = await fetch(url)
  const data = await response.json()
  return data
}
