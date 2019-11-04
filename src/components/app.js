import React from "react";
import Axios from "axios";
import TweetDisplay from "./tweetDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
      index: 0
    };
    this.updateIndex = this.updateIndex.bind(this);
  };

  componentDidMount() {
    Axios.get("/tweets")
    .then((response) => {  
      this.setState({
        tweets: response.data.statuses
      });
    })
    .catch((err) => {
      console.error("Error with Axios GET: ", err);
    })
  };

  updateIndex(value) {
    this.setState({
      index: value
    });
  };

  render() {
    return (
      <div>
        <div className="titleStyle">Tweets with #IoT</div>
        {this.state.tweets.length > 0 ? 
          <TweetDisplay 
            updateIndex={this.updateIndex} 
            tweets={this.state.tweets}
            index={this.state.index}
          /> 
            : 
          <div>Querying Tweets...</div>
        }
      </div>
    )
  };
};


export default App;