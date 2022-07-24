import React from 'react'
import cl from './Contact.module.scss'
import gitIcon from '../assets/git-icon.svg'

const Contact = () => {
  return (
    <div className={cl.contact}>
      <ul>
        <li>+380662095954</li>
        <li>adevreactjs@gmail.com</li>
        <li>
          <img src={gitIcon} alt='gitIcon' />
        </li>
      </ul>
    </div>
  );
}

export default Contact