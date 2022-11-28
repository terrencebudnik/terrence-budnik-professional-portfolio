import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/aboutme.css'

export default function AboutMe(props) {
    
    return (
        <div>
            <Modal className='about'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">About Me</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Web Developer with a background in the performing arts. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}


