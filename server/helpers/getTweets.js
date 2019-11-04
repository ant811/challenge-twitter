const TwitterClient = require("twitter-node-client").Twitter;
const config = require("./config");
const twitter = new TwitterClient(config);

const getTweets = (callback) => {
  const tweetError = (err, response, body) => {
    callback(err);
  };
  const tweetSuccess = (data) => {
    callback(null, data);
  };
  twitter.getSearch({
    "q": "#IoT",
    "count": 100,
    "lang": "en",
    "tweet_mode": "extended"
  }, tweetError, tweetSuccess);
};

module.exports = getTweets;