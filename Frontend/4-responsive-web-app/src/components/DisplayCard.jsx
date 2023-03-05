import React from 'react'
import {Card, ListGroup} from 'react-bootstrap'

const DisplayCard = ({ food }) => {
  return (
      <Card style={{ width: '13rem' }} className="m-2">
          <Card.Img variant="top" src={food?.food?.image} style={{ width: '13rem' }}/>
          <Card.Body>
          <Card.Title>{food.food?.label}</Card.Title>
          <Card.Text>
              Category: {food.food?.category}
          </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
          <ListGroup.Item>Carbohydrate: {food.food?.nutrients?.CHOCDF}</ListGroup.Item>
          <ListGroup.Item>Energy: {food.food?.nutrients?.ENERC_KCAL}</ListGroup.Item>
          <ListGroup.Item>Fat: {food.food?.nutrients?.FAT}</ListGroup.Item>
          <ListGroup.Item>Fibre: {food.food?.nutrients?.FIBTG}</ListGroup.Item>
          <ListGroup.Item>Protein: {food.food?.nutrients?.PROCNT}</ListGroup.Item>
          </ListGroup>
      </Card>
  )
}

export default DisplayCard