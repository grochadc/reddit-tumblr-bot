const axios = require("axios");

module.exports = function reddit(subreddit) {
  return new Promise((resolve, reject) => {
    axios("https://www.reddit.com/" + subreddit + "/top.json")
      .then(({ data }) => {
        let posts = data.data.children;
        resolve(
          posts.map(({ data }) => {
            const { url, title, permalink, post_hint } = data;
            return {
              url,
              title,
              permalink,
              post_hint
            };
          })
        );
      })
      .catch(error => {
        reject(error);
      });
  });
};
