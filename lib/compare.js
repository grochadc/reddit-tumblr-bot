//returns every item in arr2 that doesn't ocur in arr1
module.exports = function(arr1, arr2) {
  return arr2.filter(item => arr1.indexOf(item) <= 0);
};
