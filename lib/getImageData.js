const axios = require("axios");

module.exports = function(url) {
  return new Promise((resolve, reject) => {
    axios(url, {
      responseType: "arraybuffer"
    })
      .then(({ data }) => resolve(data.toString("base64")))
      .catch(err => reject(err));
  });
};
