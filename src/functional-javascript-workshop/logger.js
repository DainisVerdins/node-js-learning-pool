// TASK 9/18
// Use partial application to create a function that fixes the first argument to console.log.  i.e. Implement a logging function that prepends a namespace string to its output.
// Your implementation should take a namespace String and return a function that prints messages to the console with the namespace prepended.
// You should use Function#apply to implement the partial application.
// Make sure all arguments passed to the returned logging function are printed.

//  Print the output to the console directly

// ## Arguments
//   * namespace: a String to prepend to each message passed to the returned function.

// ## Example
//     var info = logger('INFO:')
//     info('this is an info message')
//     // INFO: this is an info message

//     var warn = logger('WARN:')
//     warn('this is a warning message', 'with more info')
//     // WARN: this is a warning message with more info

// ## Conditions

//   * Do not use Function#bind
//   * Use Function#apply

const slice = Array.prototype.slice; // типа алиаса вместо того чтоб использовать Array.prototype.slice
// slice - Возвращяет "отрезаный" кусочек массива.

function logger(namespace) { // will return function to call upon
    return function () {
        console.log.apply(console, [namespace].concat(slice.call(arguments)));
        // Basically here applying to console.log the name space and other arguments.
        // [namespace].concat() concat to array what contains "namespace" other values
        // slice.call(arguments) basically converts arguments object into array of values passed to function
    }
}


module.exports = logger;
