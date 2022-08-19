import React, { FC, forwardRef } from 'react';
import linkChain from '../assets/link-chain.png';
import gitFill from '../assets/github-fill.svg';
import cl from './Projects.module.scss';
import { motion } from 'framer-motion';

interface ProjectCartProps {
  title: string;
  img: string;
  link: string;
  gitLink: string;
  desc: string
}

const ProjectCart: FC<ProjectCartProps> = forwardRef(
  ({ title, img, link, gitLink, desc }, ref: React.LegacyRef<HTMLDivElement>) => {
    const openInNewTab = (url: string) => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };

    function clickGit(e: React.MouseEvent<HTMLButtonElement>, url: string) {
      e.stopPropagation();
      window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
      <div ref={ref} className={cl.cart} onClick={() => openInNewTab(link)}>
        <div className={cl.cartImg}>
          <img src={img} alt='cartBg1' />
        </div>
        <div className={cl.cartInfo}>
          <h3>{title}</h3>
          <p>
            This is my project. Thanks to him, I practiced, studied new technologies and got new
            experience.
          </p>
          <span>Tech stack: {desc}</span>
          <div className={cl.workLinks}>
            <div className={cl.workLink}>
              <img src={linkChain} alt='linkChain' />
              <button>Live Preview</button>
            </div>
            <div className={cl.workLink}>
              <img src={gitFill} alt='gitFill' />
              <button onClick={e => clickGit(e, gitLink)}>View Code</button>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default ProjectCart;
export const MProjectCart = motion(ProjectCart);
