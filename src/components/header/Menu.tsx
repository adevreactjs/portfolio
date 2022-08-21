import React from 'react'
import cl from './index.module.scss'
import { Link } from 'react-scroll';


const Menu = () => {
  return (
    <div className={cl.menu}>
      <ul className={cl.menuWrapper}>
        <li>
          <Link activeClass='active' to='stack' spy={true} smooth={true} duration={500}>
            Tech Stack
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='projects' spy={true} smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu