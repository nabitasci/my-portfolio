import React,{useState, useEffect} from 'react';
import QualificationTabs from './QualificationTabs.js';
import Skills from './Skills.js';
import About from './About.js';
import Service from './Service.js';

import SwiperCore, {
  Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper';
import ScrollUp from './ScrollUp.js';
import RecentPost from './RecentPost.js';
import ContactMe from './ContactMe.js';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export default function AboutMe(){
  
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
  
  return (
    <main>
      <About id="about" title="About Me" subtitle="General information about me" />
      <Skills id="skills" title="Skills" subtitle="My Tecnical skils"/>
      <QualificationTabs id="qualification" title="Qualification" subtitle="My Personal Journey"/> 
      <Service id="services" title="Services" subtitle="My Services"/> 
      <ScrollUp offset={offset} useEffect={useEffect}/>
      <RecentPost/>
      <ContactMe/>
    </main>    
  );
}