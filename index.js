require("dotenv").config();
const reddit = require("./reddit.js");
const tumblr = require("./tumblrClient.js");
const getImageData = require("./getImageData.js");

reddit().then(links => {
  links.forEach(link => {
    let extension = link.url.substr(link.url.length - 3);
    if (extension === "png" || "jpg" || "peg") {
      getImageData(link.url)
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

/* getImageData("https://i.imgur.com/YvijplN.jpg")
  .then(image => console.log(image))
  .catch(err => console.error("Error:", err.message));
  */
