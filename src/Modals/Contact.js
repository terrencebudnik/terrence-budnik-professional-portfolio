import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Contact(props) {
    
    return (
        <div>
            <Modal className='portfolio'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">My Contact Information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ul>
            <li>Email: terrence.budnik@gmail.com</li>
        </ul>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}


