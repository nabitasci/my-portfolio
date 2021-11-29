import React from 'react';
import QualificationData from './QualificationData';

export default function QualificationSection(props){

  return (
    <div className={props.isActive?"qualification__content qualification__active":"qualification__content"} data-content id={props.id}>
      {
        props.data && props.data.map((data, index) => (
          <QualificationData 
            key={'qualification-data-'+index}
            id={index} 
            title={data.title}
            subtitle={data.subtitle}
            calendar={data.calendar}
            isLast={(index === props.lastIndex-1)?"true":"false"}
          />
        ))
      }
      </div>
  );
}
