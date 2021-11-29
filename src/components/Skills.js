import React from 'react'
import Section from './Section.js';
import SkillItem from './SkillItem.js';
import AcordionItem from './AcordionItem.js';

export default function Skills(props){

  const dataArray = [
    {
      name: "Backend Developer",
      subtitle: "More then 4 years",
      skills:[
        {
          name: "Java",
          rate: 90,
        },
        {
          name: "PHP",
          rate: 70
        },
        {
          name: "Node Js",
          rate: 69
        }
      ],
    },
    {
      name: "Frontend Developer",
      subtitle: "More then 2 years",
      skills:[
        {
          name: "JavaScript",
          rate: 90,
        },
        {
          name: "HTML",
          rate: 70
        },
        {
          name: "React",
          rate: 69
        }
      ],
    },
    {
      name: "AI",
      subtitle: "More then 2 years",
      skills:[
        {
          name: "JavaScript",
          rate: 90,
        },
        {
          name: "HTML",
          rate: 70
        },
        {
          name: "React",
          rate: 69
        }
      ],
    }
  ]

  return (
    <Section id={props.id} name={props.id} title={props.title} subtitle={props.subtitle}>
      {
        dataArray && dataArray.map((data, index) => (
          <AcordionItem key={"skill-"+index} name={data.name} subtitle={data.subtitle}>
            {
              data.skills && data.skills.map((data, index) => (
                <SkillItem key={index} name={data.name} rate={data.rate}/>
              ))
            } 
          </AcordionItem>
        ))
      }
     </Section>
  );
}