import React from 'react';
import ContactInfo from './ContactInfo.js';
import Section from './Section.js';

export default function ContactMe(){

  const dataArray = [
    {
      icon: "uil uil-phone",
      title: "Call Me",
      subtitle: "+90 507 983 58 55"
    },
    {
      icon: "uil uil-envelope",
      title: "Mail",
      subtitle: "omernabi@outlook.com"
    },
    {
      icon: "uil uil-map-marker",
      title: "Location",
      subtitle: "Turkey Istanbul"
    }
    
  ];

  return(
    <Section id="contact"  name="contact" title="Contact Me" subtitle="Get in touch">
      <div>
        {
          dataArray && dataArray.map((data, index)=> (
            <ContactInfo key={'contact-'+index} title={data.title} subtitle={data.subtitle} icon={data.icon}/>
          ))
        }
      </div>
        <form action="" className="contact__form grid">
          <div className="contact__content">
            <label for="" className="contact__label">Name</label>
            <input type="text" className="contact__input"></input>
          </div>
          <div className="contact__content">
            <label for="" className="contact__label">Subject</label>
            <input type="text" className="contact__input"></input>
          </div>
          <div className="contact__content">
            <label for="" className="contact__label">Message</label>
            <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
          </div>
          <div>
            <a href="/#" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </a>
          </div>
        </form>
      </Section>
  );
}