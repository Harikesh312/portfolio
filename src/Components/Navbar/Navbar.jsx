import React, { useRef } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

function Navbar() {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0"
  }
  const closeMenu = () => {
    menuRef.current.style.right="-350px"
  }

  return (
    <div className='navbar'>
      <img className='tag' src="images/Harikesh-logo.png" alt="" />
      <SlMenu onClick={openMenu} className='nav-mob-open'/>
      <ul ref={menuRef} className="nav-menu">
        <RxCross2 onClick={closeMenu} className='nav-mob-close'/>
        <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p>Services</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p>Portfolio</p></AnchorLink></li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'><p>Connect With Me</p></AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
