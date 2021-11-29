import React from 'react';

export default function ServicesModal(props){
  return(
    <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title"> {props.dataArray.title}</h4>
                <i className="uil uil-times services__modal-close" onClick={() => props.setIsActive(false)}></i>
                <ul className="services__modal-services gird">
                  {
                    props.dataArray.content && props.dataArray.content.map((data, index) => (
                    <li key={'service_'+index} className="services__modal-service">
                      <i className="uil uil-check-circle services__modal-icon"></i>
                      <p>{data.p}</p>
                    </li>
                    ))
                  }
                </ul>
              </div>
            </div>
  );

}