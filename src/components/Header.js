import '../css/header.css'


export default function Header() {
 

  return (
    <>
    <div className='header'> 
          <h1 className='animation'>Terrence Budnik</h1>
    </div>
    
    <div className='navbar'>
      <button className='navItems'>About Me</button>
      <button className='navItems'>Contact Info</button>
      <button className='navItems'>Resume</button>
      <button className='navItems'>Links</button>
    </div>
    </>
      
  );
}



