import React from 'react';
import {abstractData} from "./abstractData";

const tweetData = (props) => {
  const words = abstractData(props.tweets);
  return (
    <div className="tweetDataStyle">
      <table>
        <thead>
          <tr>
            <th colspan="2">Most Common Words in 100 Tweets with #IoT</th>
          </tr>
        </thead>
        <tbody>
          <tr className="columnHead">
            <td>Word</td>
            <td>Count</td>
          </tr>
          {words.map((word) => {
            return (
              <tr>
                <td>{Object.keys(word)[0]}</td>
                <td>{Object.values(word)[0]}</td>
              </tr>
            )           
          })}
        </tbody>
      </table>
    </div>
  )
};

export default tweetData;