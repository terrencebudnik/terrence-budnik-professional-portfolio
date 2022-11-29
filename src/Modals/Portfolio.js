import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/portfolio.css'

import ebook from '../Images/ebook.jpg'
import marvel from '../Images/marvel.jpg'
import text from '../Images/text.jpg'


export default function Portfolio(props) {
    
    return (
        <div>
            <Modal className='portfolio'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div>
        <h2 className='portfolioHeader'>My Work</h2>
      </div>
      <Modal.Body>
        
        <ul className='portfolioBody'>
            <li>
                <img className='images' src= {ebook} />
            </li>
        </ul>
        <a 
        href='https://terrencebudnik.github.io/top-book-generator/' 
        target="_blank" 
        className='portfolioLinks'>Find Public Domain E-Books</a>

        <ul className='portfolioBody'>
            <li>
                <img className='images' src= {marvel} />
            </li>
        </ul>
        <a 
        href='https://stark-sierra-05669.herokuapp.com/'
        target="_blank" 
        className='portfolioLinks'>Community Generated Fan-Fiction</a>

        <ul className='portfolioBody'>
            <li>
                <img className='images' src= {text} />
            </li>
        </ul>
        <a 
        href='https://salty-coast-17014.herokuapp.com/'
        target="_blank" 
        className='portfolioLinks'>Download a Text Editor</a>


      </Modal.Body>
      <Modal.Footer>
        <Button variant ="dark" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
        </div>
    )
}


