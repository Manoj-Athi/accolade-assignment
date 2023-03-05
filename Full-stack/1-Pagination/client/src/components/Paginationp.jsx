import React from 'react'
import {Pagination} from 'react-bootstrap'

const Paginationp = ({ totalPatients, currentPage, paginate, prevPage,nextPage  }) => {
    let items = [];
    for (let i = 1; i <= Math.ceil(totalPatients / 5); i++) {
        items.push(
            <Pagination.Item key={i} active={i === currentPage} onClick={() => paginate(i)}>
            {i}
            </Pagination.Item>,
        );
    }
  return (
    <div>
        <Pagination>
            <Pagination.Prev onClick={prevPage}/>
            {items}
            <Pagination.Next onClick={nextPage}/>
        </Pagination>
    </div>
  )
}

export default Paginationp