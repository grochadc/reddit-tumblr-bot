const reddit = require("./clients/redditClient.js");
const tumblr = require("./clients/tumblrClient.js");
const getImageData = require("./lib/getImageData.js");

reddit("r/natureisfuckinglit").then(links => {
  links.forEach(link => {
    if (link.post_hint === "image") {
      getImageData(link.url) //returns image in base64
        .then(image => {
          tumblr.post({
            caption: link.title,
            data64: image,
            source: "http://www.reddit.com/" + link.permalink
          });
        })
        .catch(err => console.error(err.message));
    }
  });
});
