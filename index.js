const reddit = require("./clients/redditClient.js");
const tumblr = require("./clients/tumblrClient.js");
const getImageData = require("./lib/getImageData.js");
const path = require("path");

(async () => {
  try {
    let links = await reddit("r/natureisfuckinglit");
    let photoLinks = links.filter(
      link =>
        typeof link.url == "string" &&
        path.extname(link.url) == (".jpg" || ".jpeg" || ".png")
    );
    photoLinks.forEach(async link => {
      let image = await getImageData(link.url);
      tumblr.post({
        caption: `<a href="http://reddit.com/${link.permalink}"> ${
          link.title
        }</a>`,
        data64: image
      });
    });
  } catch (err) {
    console.error(err);
  }
})();
