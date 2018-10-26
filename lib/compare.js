//returns every item in arr2 that doesn't ocur in arr1
module.exports = (arr1, objArr) => {
  return objArr.filter(link => {
    return arr1.indexOf(link.name) <= 0;
  });
};
