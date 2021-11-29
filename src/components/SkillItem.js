import React from 'react'

export default function SkillItem(props){

  const divStyle = {
    width: props.rate+'%',
  };
  
  return (
    <div className="skills__list grid">
      <div className="skills__data">
        <div className="skills__titles">
          <h3 className="skills__name">{props.name}</h3>
          <span className="skills_number">{props.rate}%</span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage" style={divStyle}></span>
        </div>
      </div>
    </div>
  );
}