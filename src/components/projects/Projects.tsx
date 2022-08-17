import React from 'react';
import cl from './Projects.module.scss';
import cartBg1 from '../assets/cartBg1.png';
import cartBg2 from '../assets/cartBg2.png';
import cartBg3 from '../assets/cartBg3.png';
import cartBg4 from '../assets/cartBg4.png';
import cartBg5 from '../assets/cartBg5.png';
import cartBg6 from '../assets/cartBg6.png';
import flags from '../assets/flags.jpg'
import admin from '../assets/admin.jpg';
import pizza from '../assets/pizza.jpg';
import gift from '../assets/gift.jpg';
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
    },
    {
      id: 2,
      title: 'Admin Panel',
      image: admin,
      link: 'https://adevreactjs.github.io/admin-panel',
    },
    {
      id: 3,
      title: 'Pizza Shop',
      image: pizza,
      link: 'https://adevreactjs.github.io/pizza-shop-v2/',
    },
    {
      id: 4,
      title: 'Shop Gifts',
      image: gift,
      link: 'https://adevreactjs.github.io/react-shop',
    },
    {
      id: 5,
      title: 'Project Tile goes here',
      image: cartBg5,
      link: 'https://adevreactjs.github.io/country-flags/',
    },
    {
      id: 6,
      title: 'Project Tile goes here',
      image: cartBg6,
      link: 'https://adevreactjs.github.io/country-flags/',
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
