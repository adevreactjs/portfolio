import React, { useState, FC } from 'react';
import cl from './index.module.scss';
import logo from '../assets/logo.png';
import git from '../assets/git-icon.svg';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Menu from './Menu';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
    },
  }),
};

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  function handleOpenMenu(e: React.MouseEvent<HTMLButtonElement>) {
    setOpen(!open);
  }

  return (
    <div className={cl.header}>
      <div className={cl.headerNav}>
        <motion.div
          initial='hidden'
          viewport={{ once: true }}
          whileInView='visible'
          custom={1}
          variants={textAnimation}
          className={cl.logo}>
          <img src={logo} alt='logo' />
        </motion.div>
        <nav className={cl.navbar}>
          <motion.ul
            viewport={{ once: true }}
            initial='hidden'
            whileInView='visible'
            variants={textAnimation}
            custom={2}>
            <motion.li whileHover={{ scale: 1.2 }}>
              <Link activeClass='active' to='stack' spy={true} smooth={true} duration={500}>
                Tech Stack
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <Link activeClass='active' to='projects' spy={true} smooth={true} duration={500}>
                Projects
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.2 }}>
              <Link activeClass='active' to='contact' spy={true} smooth={true} duration={500}>
                Contact
              </Link>
            </motion.li>
            <div className={cl.gitIcon}>
              <img src={git} alt='git' />
            </div>
          </motion.ul>
        </nav>
        <div className={cl.iconMenu}>
          <IconButton size='large' onClick={handleOpenMenu}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
      {open && <Menu />}
    </div>
  );
};

export default Header;
