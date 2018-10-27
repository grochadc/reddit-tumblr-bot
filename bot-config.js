require("dotenv").config();
module.exports = {
  tumblr: {
    blog: "cozyplaces-bot",
    credentials: {
      consumer_key: process.env.CLIENT_ID,
      consumer_secret: process.env.CLIENT_SECRET,
      token: process.env.TOKEN,
      token_secret: process.env.SECRET
    }
  },
  subreddit: "cozyplaces",
  //server with GET and POST to store an array of ids (jsonstore.io recommended)
  db:
    "https://www.jsonstore.io/ff03b21bacbad4eefb9f3c10a276e4742edb0f9b2fcd80393724212b122aab28/posted/"
};
