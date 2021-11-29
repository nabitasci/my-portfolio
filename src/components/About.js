import React, {useEffect, useState} from 'react';
import Section from './Section.js';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source){
  return builder.image(source);
}
export default function About(props){
  const[author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "author"]{
      name,
      bio,
      "authorImage": image.asset->url 
    }`)
    .then((data) => setAuthor(data[0]))
    .catch(console.error);
  }, []);

  if(!author) return <div>Loading...</div>

  return (
    <Section id={props.id} name={props.id} title={props.title} subtitle={props.subtitle}>
      <img 
          src={urlFor(author.authorImage).url()} 
          className="about__img"
          alt={author.name}
          />
          <div className="about__data">
            <p className="about__description">
              <BlockContent
                blocks={author.bio}
                projectId="v90uxdwb"
                dataset="production"
              />
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">04+</span>
                <span className="about__info-name">Years <br/> experience </span>
              </div>

              <div>
                <span className="about__info-title">04+</span>
                <span className="about__info-name">Complated <br/> project </span>
              </div>

              <div>
                <span className="about__info-title">02</span>
                <span className="about__info-name">Companies <br/> worked </span>
              </div>
            </div>
            <div className="about__buttons">
                <a download="" href="assets/pdf/Alexa-Cv.pdf" className="button button--flex">
                  Download Cv<i className="uil uil-download-alt button__icon"></i>
                </a>
              </div>
          </div>

    </Section>
  );
}