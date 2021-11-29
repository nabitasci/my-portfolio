import React, { useState, useEffect }from 'react';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';
import Section from './Section.js';
import ScrollUp from './ScrollUp.js';

export default function Post () {

  const [postData, setPost] = useState(null);

  useEffect(()=>{
    sanityClient
    .fetch(`*[_type == "post"]{ 
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url,
        },
        alt
      }
    }`)
    .then((data)=>setPost(data))
    .catch(console.error);
  }, []);

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);

  return (
    <main className="">
      <Section>
      <h1 className="text-5xl flex justify-center cursive">Blog Post Main</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">Welcome to my blog post</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postData && postData.map((post, index)=>(
          <article>
            <Link to={"/post/" + post.slug.current} key={post.slug.current }>
            <span className="block h-64 relative rounded shadow leading-snug bg-white border-green-400"
            key={index}>
               <img src={post.mainImage.asset.url}
               alt={post.mainImage.alt}
               className="w-full h-full rounded-r object-cover absolute"
               />
               <span className="block relative h-full flex justify-center items-end pr-4 pd-4">
                 <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-ßßßßßßß text-red-100 bg-opacity-75 rounded">
                   {post.title}
                   </h3>
               </span>
            </span>
            </Link>
          </article>
          )) }
        </div>
      </Section>
      <ScrollUp offset={offset} useEffect={useEffect}/>
        
    </main>
  );
}