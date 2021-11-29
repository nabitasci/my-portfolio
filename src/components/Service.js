import React from 'react';
import Section from './Section.js';
import ServiceItem from './ServiceItem.js';

export default function Service(props){
  const dataArray = [
    {
      'title': <div>UI-UX <br/> Designer</div>,
      'icon': 'uil uil-window-grid',
      'content':[
        {
          'p': 'fafs'
        },
        {
          'p': ' asdf asdf asd'
        },
        {
          'p': ' asdfsdf'
        }
      ]
  },
  {
    'title': <div>UI-UX <br/> Designer</div>,
    'icon': 'uil uil-brackets-curly',
    'content':[
      {
        'p': 'fafs'
      },
      {
        'p': ' asdf asdf asd'
      },
      {
        'p': ' asdfsdf'
      }
     ]
  }
  ];
  return(
    <Section id={props.id} name={props.id} title={props.title} subtitle={props.subtitle}>
      {
        dataArray && dataArray.map((data, index) => (
          <ServiceItem key={'service_i-'+index} dataArray={data}/>
        ))
      }     
    </Section>
  );
}