const axios = require("axios");

module.exports = function reddit() {
  return new Promise((resolve, reject) => {
    axios("https://www.reddit.com/r/natureisfuckinglit/top.json")
      .then(({ data }) => {
        let subreddit = data;
        resolve(
          subreddit.data.children.map(({ data }) => {
            const { url, title, permalink } = data;
            return {
              url,
              title,
              permalink
            };
          })
        );
      })
      .catch(error => {
        reject(error);
      });
  });
};
