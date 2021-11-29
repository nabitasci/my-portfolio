import React, {useState, useEffect} from 'react';
import Section from './Section.js';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Navigation,Pagination,Mousewheel,Keyboard} from 'swiper';
import sanityClient from '../client.js';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

export default function RecentPost(props){
  
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

  if(!postData)return(<div>loading....</div>)
  
  return (
    <Section id="portfolio" name="portfolio" title="Portfolio" subtitle="Most recent work">
        <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="swiper-wrapper">
          {
           postData && postData.map((post, index)=>(
            <SwiperSlide>
              <div className="portfolio__content grid swiper-slide" key={'post_'+index}>
                <img src={post.mainImage.asset.url} alt={post.mainImage.alt} className="portfolio__img"></img>
                <div className="portfolio__data">
                <h3 className="portfolio__title">{post.title}</h3>
                  <p className="portfolio__description"> tih sis sdfas df asdf </p>
                  <Link to={"/post/" + post.slug.current} key={post.slug.current } className="button button--flex button--small portfolio__button">
                    Read
                    <i className="uil uil-arrow-right button__icon"></i>
                  </Link>
                </div>  
              </div>
            </SwiperSlide>       
           )) 
          }
          <div class="swiper-button-next"><i class="uil uil-angle-right-b swiper-portfolio-icon"></i></div>
          <div class="swiper-button-prev"><i class="uil uil-angle-left-b swiper-portfolio-icon"></i></div>
        </Swiper>
      </Section>
  );
}