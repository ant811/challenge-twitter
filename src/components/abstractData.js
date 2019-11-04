const abstractData = (tweets) => {
  const allTweetText = tweets.map(tweet=> {
    return tweet.full_text.split(' ');
  });

  const wordCountObj = allTweetText.reduce((acc, tweetText) => {
    tweetText.forEach(word => {
      acc[word] = acc[word] + 1 || 1;
    })
    return acc;
  }, {});
  
  const isStopWordOrInteger = (word) => {
    const stopWords = [
      "the", "and", "to", "of", "is", "by", "", "will", "a", "for",
      "The", "with", "more", "are", "in", "like", "out", "about", "that",
      "at", "be", "some", "this", "This", "your", "how", "you", "its",
      "A", "an", "what", "on", "What", "When", "can", "It", "You", "We",
      "Isn't", "Is", "-", "we", "it", "has", "Has", "as", "Than", "but",
      "Your", "than", "These"
    ]
    if(stopWords.indexOf(word) !== -1) {
      return true;
    } else if (parseInt(word)) {
      return true;
    } else {
      return false;
    }
  };

  const wordCountArr = [];
  for(let key in wordCountObj) {
    wordCountArr.push({[key]: wordCountObj[key]})
  };

  wordCountArr.sort((a, b) => {
    if(Object.values(a)[0] < Object.values(b)[0]) {
      return 1;
    }
    if(Object.values(a)[0] > Object.values(b)[0]) {
      return -1;
    }
    return 0;
  });

  return wordCountArr.filter(wordObj=> {
    return !isStopWordOrInteger(Object.keys(wordObj)[0]);
  }).slice(0, 20);
};

module.exports.abstractData = abstractData;