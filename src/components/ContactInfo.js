import React from 'react';

export default function ContactInfo(props){
  return (
    <div className="contact__information">
      <i className={props.icon+' contact__icon'}></i>
      <div>
        <h3 className="contact__title">{props.title}</h3>
        <span className="contact__subtitle">{props.subtitle}</span>
      </div>
    </div>
  );
}