import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function Resume(props) {
    
    return (
        <div>
            <Modal className='resume'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">My Resume</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
                                        Terrence Budnik  
            (630) 205-0292            terrence.budnik@gmail.com    		Chicago, IL 

Web-Developer with prior experience in management, client-facing roles, and the performing arts.

Education

Advanced Certification:	        Northwestern University- Full Stack Web Development- November 2022     

Undergraduate Degree:	         Illinois State University- Bachelor of Science  Aug 2013

        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}


