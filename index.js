const reddit = require("./clients/redditClient.js");
const tumblr = require("./clients/tumblrClient.js");
const getImageData = require("./lib/getImageData.js");
const compare = require("./lib/compare");
const path = require("path");
const axios = require("axios");

(async () => {
  try {
    let links = await reddit("r/natureisfuckinglit");
    let photoLinks = links.filter(
      link =>
        typeof link.url == "string" &&
        path.extname(link.url) == (".jpg" || ".jpeg" || ".png")
    );
    let posted = (await axios(
      "https://www.jsonstore.io/7400e86e797b508a5c9269d5662cf79b0442acd032f8f40cf4bd44faf1521ef8/posted/"
    )).data.result;
    let comparedNames = compare(posted, photoLinks.map(link => link.name));
    let linksToPost = photoLinks.filter(
      link => comparedNames.indexOf(link.name) <= 0
    );
    let posting = [];
    linksToPost.forEach(async link => {
      let image = await getImageData(link.url);
      tumblr.post({
        caption: `<a href="http://reddit.com/${link.permalink}"> ${
          link.title
        }</a>`,
        data64: image
      });
      posting.push(link.name);
    });
    let merged = posted.concat(posting);
    await axios.post(
      "https://www.jsonstore.io/7400e86e797b508a5c9269d5662cf79b0442acd032f8f40cf4bd44faf1521ef8/posted/",
      merged
    );
  } catch (err) {
    console.error(err);
  }
})();
