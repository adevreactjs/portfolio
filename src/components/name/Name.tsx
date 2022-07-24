import React from 'react';
import cl from './Name.module.scss';
import reactIcon from '../assets/reactIcon.png';
import { motion } from 'framer-motion';

const nameAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
    },
  }),
};

const logoAnimation = {
  hidden: { rotate: 0, x: 300},
  visible: (custom: number) => ({
    rotate: 360,
    x: 0,
    transition: {
      duration: 2
    },
  }),
};
const Name = () => {
  return (
    <div className={cl.myName}>
      <motion.h1 initial='hidden' whileInView='visible' custom={3} variants={nameAnimation}>
        Hi 👋, My name is <span>Andrey Sokurenko</span>
        <p>I build things for web</p>
      </motion.h1>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={logoAnimation}
        className={cl.reactLogo}>
        <img src={reactIcon} alt='reactIcon' />
      </motion.div>
    </div>
  );
};

export default Name;
