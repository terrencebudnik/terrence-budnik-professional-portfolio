import '../css/columns.css'


export default function Columns() {


  return (
    <>
      <div className='column-one'>
        <div className='portal-text'>About Me</div>
        <div className='portal'></div>
      </div>

      <div className='column-two'>
        <div className='portal-text'>Portfolio</div>
        <div className='portal'></div>
      </div>

      <div className='column-three'>
        <div className='portal-text'>Resume</div>
        <div className='portal'></div>
      </div>

      <div className='column-four'>
        <div className='portal-text'>Contact Me</div>
        <div className='portal'></div>
      </div>
    </>

  );
}