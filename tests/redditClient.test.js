const assert = require("assert");
const reddit = require("../clients/redditClient");

describe("reddit client", () => {
  it("resolves the promise", async () => {
    await assert.doesNotReject(reddit("r/natureisfuckinglit", true));
  });
  it("returns the number of posts on a subreddit", async () => {
    const posts = await reddit("r/natureisfuckinglit", true);
    assert(Number(posts.length), "the length of posts is not a number");
  });
  it("posts are objects", async () => {
    const posts = await reddit("r/natureisfuckinglit", true);
    assert(typeof posts[0] === "object", "typeof posts: " + typeof posts[0]);
  });
});
