require("dotenv").config();
const tumblr = require("./clients/tumblrClient");

tumblr
  .getQueue("natureisfuckinglitbot.tumblr.com")
  .then(({ posts }) => {
    let ids = posts.map(post => post.id);
    ids.forEach(id => {
      tumblr
        .deletePost("natureisfuckinglitbot.tumblr.com", {
          id: id.toString()
        })
        .then(res => console.log(res));
    });
  })
  .catch(err => console.error(err));
