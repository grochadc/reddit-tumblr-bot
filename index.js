const reddit = require("./clients/redditClient.js");
const tumblr = require("./clients/tumblrClient.js");
const getImageData = require("./lib/getImageData.js");
const path = require("path");

reddit("r/natureisfuckinglit").then(links => {
  links.forEach((link, index) => {
    if (path.extname(link.url) == (".jpg" || ".jpeg" || ".png")) {
      console.log("Processing index ", index, " and name ", link.name);
      getImageData(link.url) //returns image in base64
        .then(image => {
          tumblr.post({
            caption: link.title,
            data64: image,
            source: "http://www.reddit.com/" + link.permalink,
            link_index: index,
            name: link.name
          });
        })
        .catch(err => console.error(err.message));
    }
  });
});
