// # Task 11/18
// Use Array#reduce to implement a simple version of Array#map.
// ## Arguments
//   * input: an arbitrary Array of any type.
//   * operation: an arbitrary Function which can be applied to items in `input`.
// ## Hints
//   * No need to implement the optional `thisArg` argument of `Array.prototype.map`, bonus points if you do!
// ## Resources
//   * https://en.wikipedia.org/wiki/Reduce_(higher-order_function)
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

module.exports = function arrayMap(arr, fn) {
  return arr.reduce((accumulator, currentValue) => {
    return [...accumulator, fn(currentValue)];
  }, []);
};

// OFFICIAL SOLUTION
// // module.exports = function arrayMap(arr, fn, thisArg) {
//     return arr.reduce(function(acc, item, index, arr) {
//       acc.push(fn.call(thisArg, item, index, arr))
//       return acc
//     }, [])
//   }
