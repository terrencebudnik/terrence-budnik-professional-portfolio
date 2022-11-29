import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/contact.css'


export default function Contact(props) {

  return (
    <div>
      <Modal className='portfolio'
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
       <div>
        <h2 className='contactHeader'>Send me an Email!</h2>
      </div>
        <Modal.Body>
          <p  className='contactBody'>Reach Out Anytime</p>
          <Button variant ="dark" onClick={() => window.location = 'mailto:terrence.budnik@gmail.com'} style={{marginLeft: "350px"}}>Contact Me</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant ="dark" onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}


