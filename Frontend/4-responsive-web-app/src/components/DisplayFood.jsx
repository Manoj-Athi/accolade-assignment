import React from 'react'
import { Container } from 'react-bootstrap'
import DisplayCard from './DisplayCard'

const DisplayFood = ({data}) => {
  return (
    <Container className='d-flex flex-wrap justify-content-center align-items-center '>
      {
          data && data.map((d) => (
              <DisplayCard key={d.food.foodId} food={d}/>
          ))
      }
    </Container>
  )
}

export default DisplayFood