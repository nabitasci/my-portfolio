import React,{ useState } from 'react';
import ServicesModal from './ServicesModal.js';

export default function ServiceItem(props){
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="services__content" >
            <div>
              <i className={props.dataArray.icon + ' services__icon'}></i>
              <h3 className="services__title">{props.dataArray.title}</h3>
            </div>
            <span className="button button--flex button--small button--link services__button" onClick={() => setIsActive(true)}>
              View More
              <i class="uil uil-arrow-right button__icon"></i>
            </span>
            {isActive && (
              <ServicesModal setIsActive={setIsActive} dataArray={props.dataArray}/>
            )}
            
          </div>
  );
}