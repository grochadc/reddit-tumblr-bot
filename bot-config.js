require("dotenv").config();
module.exports = {
  tumblr: {
    blog: "tattoos-bot",
    credentials: {
      consumer_key: process.env.CLIENT_ID,
      consumer_secret: process.env.CLIENT_SECRET,
      token: process.env.TOKEN,
      token_secret: process.env.SECRET
    }
  },
  subreddit: "tattoos",
  //server with GET and POST to store an array of ids (jsonstore.io recommended)
  db:
    "https://www.jsonstore.io/48d04ae3b5b4cf2cb4c8bf97706d066c324795bdbe72e628a6a697c92864fcdc/posted/"
};
