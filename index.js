const reddit = require("./clients/redditClient.js");
const tumblr = require("./clients/tumblrClient.js");
const getImageData = require("./lib/getImageData.js");
const compare = require("./lib/compare");
const path = require("path");
const axios = require("axios");

(async () => {
  const config = require('./bot-config')
  try {
    let links = (await reddit(config.subreddit)).filter(
      link =>
        typeof link.url == "string" &&
        path.extname(link.url) == (".jpg" || ".jpeg" || ".png")
    );
    console.log("Links ", links.length);
    let posted = (await axios(
      config.db
    )).data.result;
    let queue = posted ? compare(posted, links) : links;
    console.log("Queue ", queue.length);
    queue.forEach(async link => {
      let image = await getImageData(link.url);
      tumblr.post({
        caption: `<a href="http://reddit.com/${link.permalink}"> ${
          link.title
        }</a>`,
        data64: image,
        blogName: config.tumblr.blog,
        config.tumblr.tags
      });
    });
    let merged = posted ? posted.concat(queue.map(link => link.name)) : queue.map(link => link.name);
    console.log("Merged ", merged.length);
    await axios.post(
      config.db,
      merged
    );
  } catch (err) {
    console.error(err);
  }
})();
