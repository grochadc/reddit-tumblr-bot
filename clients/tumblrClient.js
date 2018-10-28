require("dotenv").config();
const tumblr = require("tumblr.js");
const config = require('../bot-config')

var client = tumblr.createClient({
  consumer_key: config.tumblr.credentials.consumer_key,
  consumer_secret: config.tumblr.credentials.consumer_secret,
  token: config.tumblr.credentials.token,
  token_secret: config.tumblr.credentials.token_secret,
  returnPromises: true
});

module.exports = {
  post: params => {
    client
      .createPhotoPost(`${params.blogName}.tumblr.com`, {
        type: "photo",
        state: "queue",
        tags: params.tags,
        caption: params.caption,
        data64: params.data64
      })
      .then(result => console.log(result))
      .catch(err => console.error(err));
  },
  getQueue: identifier => {
    return client.blogQueue(identifier);
  },
  deletePost: (identifier, params) => {
    return client.deletePost(identifier, params);
  }
};
