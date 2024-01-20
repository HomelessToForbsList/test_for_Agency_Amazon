import React from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';

import { SetURLSearchParams } from 'react-router-dom';

type FilterProps = {
  values: string[],
  onSubmit: SetURLSearchParams
}

const Filter = ({values, onSubmit} : FilterProps) => {

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    for (const [key, value] of data.entries()) {
      if(value) onSubmit({[`${key}`]: value.toString()}, {replace: true})
    }
  }

  return (
    <>
      <Button variant='dark' className='py-2 fw-bold' onClick={handleShow}>
        Filter
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
          onSubmit={handler}
          className='d-flex flex-column align-items-center'
          >
            {values.map(value =>
              <Form.Group key={value} className='mb-2 w-100'>
                <Form.Label>{value}</Form.Label>
                <Form.Control name={value} type='text' placeholder={value} />
              </Form.Group>
            )}
            <Button variant="primary" type="submit" className='mt-2 px-5'>
              Apply
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Filter
