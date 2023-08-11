import React from 'react';
import cl from './App.module.scss';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Name from './components/name/Name';
import Projects from './components/projects/Projects';
import TechStack from './components/techStack/TechStack';
import {Element} from 'react-scroll';

function App() {
    return (
        <div className={cl.wrapper}>
            <div className={cl.container}>
                <Header/>
                <Name/>
                <Element name='stack'>
                    <TechStack/>
                </Element>
                <Element name='projects'>
                    <Projects/>
                </Element>
                <Element name='contact'>
                    <Contact/>
                </Element>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
