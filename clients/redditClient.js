const axios = require("axios");

module.exports = function reddit(subreddit) {
  return new Promise((resolve, reject) => {
    axios("https://www.reddit.com/" + subreddit)
      .then(({ data }) => {
        let posts = data.children;
        resolve(
          posts.map(({ data }) => {
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
