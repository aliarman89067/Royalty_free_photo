import React,{ useState } from 'react'
import './Navbar.css'
import { logo } from '../../assets'
import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineClose }  from 'react-icons/md'
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  return (
    <div className='app__navbar'>
    <div className='app__navbar-img'>
      <img src={logo} alt="Logo" />
    </div>
    <div className='app__navbar-links-login'>
      <ul className='app__navbar-links'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Wallpaper</a></li>
        <li><a href="#">Travel</a></li>
        <li><a href="#">Nature</a></li>
        <li><a href="#">Animal</a></li>
        <li><a href="#" style={{color:'#fff'}}>More</a></li>
      </ul>
      <div className='app__navbar-login'>
        <p>Log in</p>
        <div className='app__line' />
        <p>Sign up</p>
      </div>
      <div className='app__navbar-mobile' onClick={()=> setMenu((prev)=> !prev)}>
      {menu ? <MdOutlineClose /> : <GiHamburgerMenu />}
      </div>
        {menu && (
          <ul className='app__navbar-mobile-links'>
          <li><a href="#">Home</a></li>
          <li><a href="#">Wallpaper</a></li>
          <li><a href="#">Travel</a></li>
          <li><a href="#">Nature</a></li>
          <li><a href="#">Animal</a></li>
          <li><a href="#" style={{color:'#fff'}}>More</a></li>
        </ul>
        )}
    </div>
    </div>
  )
}

export default Navbar
