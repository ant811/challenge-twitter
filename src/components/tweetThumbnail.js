import React from 'react';

class TweetThumbNail extends React.Component {
  constructor(props) {
    super(props);
  };
  
  handleUpdate() {
    this.props.updateIndex(this.props.index)
  };

  render() {
    return (
      <div 
        className="tweetThumbStyle"
        onClick={this.handleUpdate.bind(this)}
      >
        {this.props.tweet.full_text}
      </div>
    )
  };
};

export default TweetThumbNail;