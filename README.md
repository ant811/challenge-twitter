# challenge-twitter

This application:

 - Retrieves 100 tweets from Twitter's API that contain #IoT
 - Displays those 100 tweets in a carousel, and
 - Displays top 20 most common words used in the tweets

The tweet detail section above the carousel highlights specific detail for a single tweet.  Clicking on any tweet in the carousel will update the tweet detail section.  

## Application Setup

1. Clone repository to local machine
2. In a terminal window, navigate to project folder directory
3. Run the following command in the terminal: `npm install`.  npm installs all modules listed as dependencies in package.json
4. In the project directory folder, create a file named `.env`
5. Paste the content from the file `.envExample` into the file `.env`
6. In `.env`, replace the text `UPDATE_WITH_YOUR_INFORMATION` with  information specific to your own Twitter Development account.  For instructions, refer to [Twitter's development documentation](https://developer.twitter.com/en/docs)
7. Run the following command in the terminal: `npm run start`. 
 An Express.js server is now running on local port 3030 
8. Open an internet browser and go to the address [http://localhost:3030/](http://localhost:3030/).  The twitter application is available in the browser window and ready for use

## Development
### Compile Updated Code
To compile updated code, navigate to project folder directory in a terminal window and run the following command: `npm run webpack` 

**RESULT:** 

- Webpack recompiles /dist/bundle.js, and
- Continuously checks for, and recompiles, updated code while the terminal window is open