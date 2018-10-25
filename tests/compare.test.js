const compare = require("../lib/compare");
const assert = require("assert");

describe("Compare function", () => {
  it('returns ["d","e"]', () => {
    assert.deepEqual(compare(["a", "b", "c"], ["c", "d", "e"]), ["d", "e"]);
  });
});
