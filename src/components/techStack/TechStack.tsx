import React from 'react';
import cl from './TechStack.module.scss';
import htmlIcon from '../assets/htmlIcon.svg';
import cssIcon from '../assets/cssIcon.svg';
import jsIcon from '../assets/jsIcon.svg';
import reactIcon from '../assets/react.svg';
import reduxIcon from '../assets/reduxIcon.svg';
import bootstapIcon from '../assets/bootstrapIcon.svg';
import tailwindIcon from '../assets/tailwindIcon.svg';
import scssIcon from '../assets/sassIcon.svg';
import gitIcon from '../assets/gitIcon.svg';
import greensockIcon from '../assets/greensock.svg';
import vscodeIcon from '../assets/vscode.svg';
import githubIcon from '../assets/github-fill.svg';
import { motion } from 'framer-motion';

function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      viewport={{ once: true }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: 'easeOut', duration: 1 }}
      className={cl.myTechStack}>
      <h2>My Tech Stack</h2>
      <p> Technologies I’ve been working with recently</p>
      <div className={cl.stackIcon}>
        <div className={cl.stackIconRow}>
          <img src={htmlIcon} alt='htmlIcon' />
          <img src={cssIcon} alt='cssIcon' />
          <img src={jsIcon} alt='jsIcon' />
          <img src={reactIcon} alt='reactIcon' />
          <img src={reduxIcon} alt='reduxIcon' />
          <img src={bootstapIcon} alt='bootstapIcon' />
        </div>
        <div className={cl.stackIconRow}>
          <img src={tailwindIcon} alt='tailwindIcon' />
          <img src={scssIcon} alt='scssIcon' />
          <img src={gitIcon} alt='gitIcon' />
          <img src={greensockIcon} alt='greensockIcon' />
          <img src={vscodeIcon} alt='greensockIcon' />
          <img src={githubIcon} alt='githubIcon' />
        </div>
      </div>
    </motion.div>
  );
}

export default TechStack;
