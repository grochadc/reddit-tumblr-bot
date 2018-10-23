const reddit = require("../clients/redditClient.js");
const path = require("path");
const fs = require("fs");
const assert = require("assert");

describe("index", () => {
  it("reads posted links from file", async () => {
    fs.readFile("posted.json", "utf8", async (err, res) => {
      let posted = res ? JSON.parse(res) : [];
      let toPost = [
        "t3_9oclap",
        "t3_9ok83z",
        "t3_9og5g1",
        "t3_9oje5z",
        "t3_9of0sq",
        "t3_9ofndu",
        "t3_9od2d6",
        "t3_9ogwvd",
        "t3_9oknzp",
        "t3_9oj9kt",
        "t3_9og5g1",
        "t3_9oje5z",
        "t3_9of0sq",
        "t3_9ofndu",
        "t3_9od2d6",
        "t3_9ogwvd",
        "t3_9ojqqh",
        "t3_9ofhq1",
        "t3_9oknzp",
        "t3_9oj9kt",
        "t3_9ochq1",
        "t3_9og0g1",
        "t3_9ofndu",
        "t3_9od2d6",
        "t3_9ogwvd",
        "t3_9ojqqh",
        "t3_9oj9kt",
        "t3_9ochq1",
        "t3_9og0g1"
      ];

      function unique(posted, toPost) {
        return toPost.map(toPostName => {
          posted.filter(postedName => {
            return postedName == toPostName;
          });
        });
      }
      console.log(unique(posted, toPost));
    });
  });
});
