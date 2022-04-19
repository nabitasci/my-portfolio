import React, {useState} from 'react';
import QualificationSection from './QualificationSection';
import Section from './Section.js';

export default function QualificationTabs(props){

  const[activeIndex, setActiveIndex] = useState(0);
  let dataArray=[
      {
          id: "education",
          title: "Education",
          className: "uil uil-graduation-cap qualification__icon",
          content: [
            {
              title:" tests 1",
              subtitle:"test sub title",
              calendar:"2312-123"
            },
            {
              title:" tests 2",
              subtitle:"test sub title",
              calendar:"314-1234"
            },
            {
              title:" tests 3",
              subtitle:"test sub title",
              calendar:"1342-134"
            }
          ]
          
      },
      {
        id: "work",
        title: "Work",
        className: "uil uil-briefcase-alt qualification__icon",
        content: [
          {
            title:" tests 1",
            subtitle:"test sub title",
            calendar:"2312-123"
          },
          {
            title:" tests 2",
            subtitle:"test sub fasdfadsf",
            calendar:"314-1234"
          },
          {
            title:" tests 3",
            subtitle:"test sub title",
            calendar:"1342-134"
          }
        ]
      }
    ];

  
  
  return (
    <Section id="qualification" name="qualification" title="Qualification" subtitle="My Personal Journey">
      <div className="qualification__tabs">
      {
        dataArray && dataArray.map((data, index) => (
          <div 
          key={index}
            className={index === activeIndex ? 'qualification__button button--flex qualification__active': 'qualification__button button--flex' }
            data-target={'#'+data.id} 
            onClick={
              () => setActiveIndex(index)
            }>
          <i className={data.className}></i>
          {data.title}
        </div>
        ))
      }
      </div>
      <div className="qualification__sections">
        {
          dataArray && dataArray.map((data, index)=>(
            <QualificationSection key={data.id} id={data.id} isActive={index===activeIndex} data={data.content} lastIndex = {data.content.length}/>
          ))
        }       
      </div>
    </Section>
    

    
  );
}