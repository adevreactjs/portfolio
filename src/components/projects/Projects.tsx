import React from 'react';
import cl from './Projects.module.scss';
import cartBg1 from '../assets/cartBg1.png';
import cartBg2 from '../assets/cartBg2.png';
import cartBg3 from '../assets/cartBg3.png';
import cartBg4 from '../assets/cartBg4.png';
import cartBg5 from '../assets/cartBg5.png';
import cartBg6 from '../assets/cartBg6.png';
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
      title: 'Project Tile goes here',
      image: cartBg1,
    },
    {
      id: 2,
      title: 'Project Tile goes here',
      image: cartBg2,
    },
    {
      id: 3,
      title: 'Project Tile goes here',
      image: cartBg3,
    },
    {
      id: 4,
      title: 'Project Tile goes here',
      image: cartBg4,
    },
    {
      id: 5,
      title: 'Project Tile goes here',
      image: cartBg5,
    },
    {
      id: 6,
      title: 'Project Tile goes here',
      image: cartBg6,
    },
  ];

  return (
    <div className={cl.projectsList}>
      <motion.h2 initial='hidden' whileInView='visible' variants={cartAnimation} custom={1}>
        Projects
      </motion.h2>
      <p>Things I’ve built so far</p>
      <div className={cl.projectsCarts}>
        <div className={cl.projectsRow}>
          {titleList.map((el, ind) => (
            <MProjectCart
              initial='hidden'
              whileInView='visible'
              custom={ind + 1}
              variants={cartAnimation}
              key={el.id}
              title={el.title}
              img={el.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
