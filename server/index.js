const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3030;

app.use(express.static(__dirname + "/../dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const getTweets = require("./helpers/getTweets");

app.get("/tweets", (req, res) => {  
  getTweets((err, data) => {
    if(err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
