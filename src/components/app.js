import React from "react";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: ""
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
      <div>Rendering to browser</div>
    )
  };
};


export default App;