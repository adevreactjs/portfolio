import React from 'react';
import cl from './Projects.module.scss';

import flags from '../assets/flags.jpg'
import admin from '../assets/admin.jpg';
import pizza from '../assets/pizza.jpg';
import gift from '../assets/gift.jpg';
import tatoo from '../assets/tatoo.jpg';
import weather from '../assets/weather.jpg';
import ProjectCart, { MProjectCart } from './ProjectCart';
import { motion } from 'framer-motion';

const cartAnimation = {
  hidden: { y: 100, opacity: 0 },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: custom * 0.2,
    },
  }),
};

const Projects = () => {
  const titleList = [
    {
      id: 1,
      title: 'Country flags',
      image: flags,
      link: 'https://adevreactjs.github.io/country-flags/',
      gitLink: 'https://github.com/adevreactjs/country-flags',
      desc: 'React, JavaScript, Styled-Components',
    },
    {
      id: 2,
      title: 'Admin Panel',
      image: admin,
      link: 'https://adevreactjs.github.io/admin-panel',
      gitLink: 'https://github.com/adevreactjs/admin-panel',
      desc: 'React, JavaScript, HTML/SCSS',
    },
    {
      id: 3,
      title: 'Pizza Shop',
      image: pizza,
      link: 'https://burger-store-five.vercel.app/',
      gitLink: 'https://github.com/adevreactjs/burger-store',
      desc: 'Next.js, Tailwindcss, TypeScript, Redux Toolkit',
    },
    {
      id: 4,
      title: 'Shop Gifts',
      image: gift,
      link: 'https://adevreactjs.github.io/react-shop',
      gitLink: 'https://github.com/adevreactjs/react-shop',
      desc: 'React, JavaScript, Redux, HTML/CSS',
    },
    {
      id: 5,
      title: 'Weather App',
      image: weather,
      link: 'https://adevreactjs.github.io/weather-app/',
      gitLink: 'https://github.com/adevreactjs/weather-app',
      desc: 'React, JavaScript, TypeScript, Redux, HTML/SCSS',
    },
    {
      id: 6,
      title: 'Tattoo Site',
      image: tatoo,
      link: 'https://adevreactjs.github.io/tattoo-studio/',
      gitLink: 'https://github.com/adevreactjs/tattoo-studio',
      desc: 'React, JavaScript, HTML/SCSS',
    },
  ];

  return (
    <div className={cl.projectsList}>
      <motion.h2
        initial='hidden'
        viewport={{ once: true }}
        whileInView='visible'
        variants={cartAnimation}
        custom={1}>
        Projects
      </motion.h2>
      <p>Things I’ve built so far</p>
      <div className={cl.projectsCarts}>
        <div className={cl.projectsRow}>
          {titleList.map((el, ind) => (
            <MProjectCart
              initial='hidden'
              viewport={{ once: true }}
              whileInView='visible'
              custom={ind + 1}
              variants={cartAnimation}
              key={el.id}
              title={el.title}
              img={el.image}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              link={el.link}
              gitLink={el.gitLink}
              desc={el.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
