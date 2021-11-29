import React,{useState} from 'react'

export default function AcordionItem(props){
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className={isActive?"skills__content skills__open":"skills__content skills__close"} onClick={() => setIsActive(!isActive)}>
      <div className="skills__header" >
      <i className={props.iconClass ? props.iconClass: "uil uil-server-network skills__icon"}></i>

      <div>
        <h1 className="skills__title"> {props.name}</h1>
        <span className="skills__subtitle"> {props.subtitle}</span>
      </div>
      <i className="uil uil-angle-down skills__arrow"></i>
      </div>
      {props.children}
    </div>
  );
}