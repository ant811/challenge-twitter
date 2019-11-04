import React from 'react';
import Slider from "react-slick";
import TweetThumbNail from "./tweetThumbnail";
import {NextArrow, PrevArrow} from "./arrows"

const tweetDisplay = (props) => {
  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="carouselDivStyle">
      <Slider {...carouselSettings}>
        {props.tweets.map((tweet, index) => {
          return <TweetThumbNail tweet={tweet} key={index} index={index}/>
        })} 
      </Slider>
    </div>
  );

};

export default tweetDisplay;