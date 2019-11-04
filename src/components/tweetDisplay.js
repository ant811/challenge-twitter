import React from 'react';
import Slider from "react-slick";
import TweetThumbNail from "./tweetThumbnail";
import TweetMain from "./tweetMain";
import TweetData from "./tweetData";
import carouselSettings from "./carouselConfig"

const tweetDisplay = (props) => {
  return (
    <div>
      <TweetMain tweet={props.tweets[props.index]}/>
      <div className="carouselDivStyle">
        <Slider {...carouselSettings}>
          {props.tweets.map((tweet, index) => {
            return <TweetThumbNail 
              tweet={tweet} 
              key={index} 
              index={index}
              updateIndex={props.updateIndex}
            />
          })} 
        </Slider>
      </div>
      <TweetData tweets={props.tweets}/>
    </div>
  );
};

export default tweetDisplay;