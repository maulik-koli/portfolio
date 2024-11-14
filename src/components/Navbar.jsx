import React, { useRef, useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import Logo from '../assets/logo.png'
import underline from '../assets/nav-underline.svg'
import menu_open from '../assets/menu-open.svg'
import menu_close from '../assets/menu-close.svg'


const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef = useRef()

  const onOpenMenu = () => {
    menuRef.current.style.right = "0"
  }
  const onCloseMenu = () => {
    menuRef.current.style.right = "-350px"
  }

  return (
    <div className='navbar'>
        <img src={menu_open} onClick={onOpenMenu} alt="" className='nav-open' />
        <ul ref={menuRef} className="nav-menu">
            <img src={menu_close}  onClick={onCloseMenu} alt="" className="nav-close" />
            <li>
              <AnchorLink className='links' offset={50} href='#home'><p onClick={() => setMenu('home')} >Home</p></AnchorLink>
              {menu === 'home' ? <img src={underline} alt='' /> : <></>}
            </li>
            <li>
              <AnchorLink className='links' offset={50} href='#about'><p onClick={() => setMenu('about')} >About Me</p></AnchorLink>
              {menu === 'about' ? <img src={underline} alt='' /> : <></>}
            </li>
            <li>
              <AnchorLink className='links' offset={50} href='#project'><p onClick={() => setMenu('project')} >Projects</p></AnchorLink>
              {menu === 'project' ? <img src={underline} alt='' /> : <></>}
            </li>
            <li>
              <AnchorLink className='links' offset={50} href='#contact'><p onClick={() => setMenu('contact')} >Contact</p></AnchorLink>
              {menu === 'contact' ? <img src={underline} alt='' /> : <></>}
            </li>
        </ul>
        <div className="nav-connect"><AnchorLink className='links' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
