const reddit = require("./clients/redditClient.js");
const tumblr = require("./clients/tumblrClient.js");
const getImageData = require("./lib/getImageData.js");
const compare = require("./lib/compare");
const path = require("path");
const axios = require("axios");

(async () => {
  try {
    let links = (await reddit("r/natureisfuckinglit")).filter(
      link =>
        typeof link.url == "string" &&
        path.extname(link.url) == (".jpg" || ".jpeg" || ".png")
    );
    console.log("Links ", links.length);
    let posted = (await axios(
      "https://www.jsonstore.io/7400e86e797b508a5c9269d5662cf79b0442acd032f8f40cf4bd44faf1521ef8/posted/"
    )).data.result;
    let queue = posted ? compare(posted, links) : links;
    console.log("Queue ", queue.length);
    queue.forEach(async link => {
      let image = await getImageData(link.url);
      tumblr.post({
        caption: `<a href="http://reddit.com/${link.permalink}"> ${
          link.title
        }</a>`,
        data64: image
      });
    });
    let merged = posted ? posted.concat(queue.map(link => link.name)) : queue.map(link => link.name);
    console.log("Merged ", merged.length);
    await axios.post(
      "https://www.jsonstore.io/7400e86e797b508a5c9269d5662cf79b0442acd032f8f40cf4bd44faf1521ef8/posted/",
      merged
    );
  } catch (err) {
    console.error(err);
  }
})();
