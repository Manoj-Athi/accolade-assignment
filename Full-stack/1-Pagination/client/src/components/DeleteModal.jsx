import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const DeleteModal = ({ show, handleClose, handleDelete }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure to delete a record?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={() => handleDelete()}>
            Delete
          </Button>
        </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal