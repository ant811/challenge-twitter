import React from 'react';

const tweetMain = (props) => {
  const twitterUser = props.tweet.user.name;
  const twitterHandle = props.tweet.user.screen_name;
  const linkToTweet = `http://www.twitter.com/${twitterHandle}/status/${props.tweet.id_str}`;
  const timeOfTweet = props.tweet.created_at;

  return (
    <div className="tweetMainStyle">
      <div><span className="categoryStyle">Twitter User:</span> {twitterUser}</div>
      <div><span className="categoryStyle">Twitter Handle:</span> @{twitterHandle}</div>
      <div><span className="categoryStyle">Link to Tweet:</span> <a href={linkToTweet} target="_blank">Click Here</a></div>
      <div><span className="categoryStyle">Time of Tweet:</span> {timeOfTweet}</div>
      <div><span className="categoryStyle">Tweet:</span> {props.tweet.full_text}</div>
    </div>
  )
};

export default tweetMain;