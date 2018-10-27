const axios = require("axios");
const fs = require("fs");

module.exports = function reddit(subreddit, offline) {
  return new Promise((resolve, reject) => {
    if (offline) {
      fs.readFile("./reddit-example.json", "utf8", function(err, posts) {
        resolve(JSON.parse(posts).data.children);
      });
    } else {
      axios(`https://www.reddit.com/${subreddit}/top.json`)
        .then(({ data }) => {
          let posts = data.data.children;
          resolve(
            posts.map(({ data }) => {
              return data;
            })
          );
        })
        .catch(error => {
          reject(error);
        });
    }
  });
};
