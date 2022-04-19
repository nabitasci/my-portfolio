import React from 'react';

export default function QualificationData(props){

  if(props.id%2 === 0){
    return(
      <div className="qualification__data">
        <div>
              <h3 className="qualification__title"> {props.title}</h3>
              <span className="qualification__subtitle">{props.subtitle}</span>
              <div className="qualification__calendar">
                <i className="uil uil-calendar-alt"></i>
                {props.calendar}
              </div>
        </div>
      <div>
        <span className="qualification__rounder"></span>
        {(props.isLast=== false )&&(<span className="qualification__line"></span>)}
      </div>
    </div>
    );
  }else{
    return(
      <div className="qualification__data">
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            {(props.isLast === false) && (<span className="qualification__line"></span>)}
          </div>
            <div>
                  <h3 className="qualification__title"> {props.title}</h3>
                  <span className="qualification__subtitle"> {props.subtitle}</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt"></i>
                    {props.calendar}
                  </div>
            </div>
        </div>
    );
  }
}