import React from 'react';

const tweetThumbNail = (props) => {
  return (
    <div className="tweetThumbStyle">
      {props.tweet.full_text}
    </div>
  )
};

export default tweetThumbNail;