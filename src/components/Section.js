import React from 'react';

export default function Section (props){
  return (
    <section className={props.name + " section"} id={props.id}>
          <h2 className="section__title" >{props.title}</h2>
          <span className="section__subtitle">{props.subtitle}</span>
          <div className={props.name + "__container container__cus grid"}>
              {props.children}
          </div>
        </section>
  );
}