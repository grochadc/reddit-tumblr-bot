require("dotenv").config();
const tumblr = require("tumblr.js");

var client = tumblr.createClient({
  consumer_key: process.env.CLIENT_ID,
  consumer_secret: process.env.CLIENT_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.SECRET,
  returnPromises: true
});

module.exports = {
  post: params => {
    client
      .createPhotoPost("natureisfuckinglitbot.tumblr.com", {
        type: "photo",
        state: "queue",
        tags: "natureisfuckinglit, nature, photography",
        caption: params.caption,
        data64: params.data64
      })
      .then(result => {
        console.log(
          "Processing index",
          params.link_index ? params.link_index : '',
          " name ",
          params.name
        );
        console.log(result);
      })
      .catch(err => {
        console.error(err)
        console.log(
          "Processing index",
          params.link_index,
          " name ",
          params.name
      });
  }
};
