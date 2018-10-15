const tumblrAuth = require("./tumblrAuth");
const app = require("express")();

app.get("/auth", (req, res) => {
  let uri = tumblrAuth.code.getUri();
  res.redirect(uri);
});

app.get("/callback", (req, res) => {
  tumblrAuth.code.getToken(req.originalUrl).then(user => {
    console.log(user);
    res.send(user);
  });
});

app.listen(3030, () => console.log("Listening"));
