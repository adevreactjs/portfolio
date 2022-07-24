import React, { FC, forwardRef } from 'react';
import linkChain from '../assets/link-chain.png';
import gitFill from '../assets/github-fill.svg';
import cl from './Projects.module.scss';
import { motion } from 'framer-motion';

interface ProjectCartProps {
  title: string;
  img: string;
}

const ProjectCart: FC<ProjectCartProps> = forwardRef(
  ({ title, img }, ref: React.LegacyRef<HTMLDivElement>) => {
    return (
      <div ref={ref} className={cl.cart}>
        <div className={cl.cartImg}>
          <img src={img} alt='cartBg1' />
        </div>
        <div className={cl.cartInfo}>
          <h3>{title}</h3>
          <p>
            This is sample project description random things are here in description This is sample
            project lorem ipsum generator for dummy content
          </p>
          <span>Tech stack : HTML , JavaScript, React</span>
          <div className={cl.workLinks}>
            <div className={cl.workLink}>
              <img src={linkChain} alt='linkChain' />
              <button>Live Preview</button>
            </div>
            <div className={cl.workLink}>
              <img src={gitFill} alt='gitFill' />
              <button>View Code</button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default ProjectCart;
export const MProjectCart = motion(ProjectCart);
