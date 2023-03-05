import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'

const Search = ({searchKey, setSearchKey, handleSearch}) => {
  return (
    <Row className='align-items-center'>
        <Col sm={12} md={6}>
            <h1>Search foods</h1>
        </Col>
        <Col sm={12} md={6}>
            <Form onSubmit={handleSearch} className="d-flex">
                <Form.Control type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} placeholder="Search"/>
                <Button type="submit" variant="primary" className="ms-2">Search</Button>
            </Form>
        </Col>
    </Row>
  )
}

export default Search