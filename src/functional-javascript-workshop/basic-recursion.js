const reduce = (arr, fn, initial) => {
  if (!arr.length) return initial;

  const currentValue = arr[0]; // item to operate with
  fn(initial, currentValue, 0, arr); // perform action

  return reduce(arr.slice(1), fn, initial); // next
};

module.exports = reduce;
// Как я понял отличие моего от этого варика в том что тут не происходит манипуляция с массивом
// (с каждой итерацией в моём решении создаёться заного массив только без "бошки")
// Тут только через индексы и не как не затрагиваеться массив а значит проблем с памятью не будет

// Here's the official solution in case you want to compare notes:
// function reduce(arr, fn, initial) {
// return (function reduceOne(index, value) {
// if (index > arr.length - 1) return value // end condition
// return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
// })(0, initial) // IIFE. kick off recursion with initial values
// }

// module.exports = reduce
