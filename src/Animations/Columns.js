import React from 'react';
import AboutMe from '../Modals/AboutMe';
import Portfolio from '../Modals/Portfolio';
import Resume from '../Modals/Resume'; 
import Contact from '../Modals/Contact'
import Button from 'react-bootstrap/Button';
import '../css/columns.css'


export default function Columns() {
  
  const [aboutMeModalShow, setAboutMeModalShow] = React.useState(false);
  const [portfolioModalShow, setPortfolioModalShow] = React.useState(false);
  const [resumeModalShow, setResumeModalShow] = React.useState(false);
  const [contactModalShow, setContactModalShow] = React.useState(false);

  return (
    <>
      <div className='column-one'>

        <button className='portal-text' onClick={() => setAboutMeModalShow(true)}>About Me</button>
        <div className='portal'></div>
        <div> 
        <AboutMe 
        show={aboutMeModalShow}
        onHide={() => setAboutMeModalShow(false)}/> 

        </div>
      </div>

      <div className='column-two'>
      <button className='portal-text' onClick={() => setPortfolioModalShow(true)}>Portfolio</button>
        <div className='portal'></div>
        <div> 
        <Portfolio 
        show={portfolioModalShow}
        onHide={() => setPortfolioModalShow(false)}/> 

        </div>
      </div>

      <div className='column-three'>
      <button className='portal-text' onClick={() => setResumeModalShow(true)}>My Resume</button>
        <div className='portal'></div>
        <div> 
        <Resume
        show={resumeModalShow}
        onHide={() => setResumeModalShow(false)}/> 

        </div>
      </div>

      <div className='column-four'>
      <button className='portal-text' onClick={() => setContactModalShow(true)}>Contact Info</button>
        <div className='portal'></div>
        <div> 
        <Contact
        show={contactModalShow}
        onHide={() => setContactModalShow(false)}/> 

        </div>
      </div>
    </>

  );
}