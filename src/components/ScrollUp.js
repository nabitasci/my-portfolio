import React from 'react';

export default function ScrollUp(props){

  return (
    <a href="#" className={props.offset>=560? "scrollup show-scroll" : "scrollup"} id="scroll-up">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
}