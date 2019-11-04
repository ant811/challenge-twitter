import React from "react";
import Axios from "axios";
import TweetDisplay from "./tweetDisplay";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    }
  };

  componentDidMount() {
    Axios.get("/tweets")
    .then((response) => {  
      this.setState({
        tweets: response.data.statuses
      }, () => {
        console.log("State updated with tweets");
      });
    })
    .catch((err) => {
      console.log("Error with Axios GET: ", err);
    })
  }

  render() {
    return (
      <div>
        <div className="titleStyle">Tweets with #IoT</div>
        {this.state.tweets.length > 0 ? 
          <TweetDisplay tweets={this.state.tweets}/> : <div>Querying Tweets...</div>
        }
      </div>
    )
  };
};


export default App;