import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './navbar.css';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const menu_items = <>
    <a href="#skills">
      <li>Skills</li>
    </a>
    <a href="#education">
      <li>Education</li>
    </a>
    <a href="#projects">
      <li>Projects</li>
    </a>
    <a href="#aboutme">
      <li>About Me</li>
    </a>
    <a href="#contactme">
      <li>Contact Me </li>
    </a>
  </>

  const sm_menus = <ul className='sm-menus'>
    {menu_items}
  </ul>

  const lg_menus = <ul className='lg-menus'>
    {menu_items}
  </ul>

  return (
    <div className='navbar' id='navbar'>
      <div className="logo">Portfolio</div>
      <div className="menus">
        <GiHamburgerMenu onClick={() => setShowMenu((s) => !s)} />
        {
          showMenu && sm_menus
        }
        {lg_menus}
      </div>
    </div>
  )
}

export default NavBar