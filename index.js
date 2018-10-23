const reddit = require("./clients/redditClient.js");
const tumblr = require("./clients/tumblrClient.js");
const getImageData = require("./lib/getImageData.js");
const path = require("path");

reddit("r/natureisfuckinglit").then(links => {
  links.forEach((link, index) => {
    if (path.extname(link.url) == (".jpg" || ".jpeg" || ".png")) {
      console.log("Processing an image on index: ", index);
      getImageData(link.url) //returns image in base64
        .then(image => {
          tumblr.post({
            caption: `<a href="${link.url}">${link.title}</a>`,
            data64: image
          });
        })
        .catch(err => console.error(err.message));
    }
  });
});
