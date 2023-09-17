// Function Spies
// Exercise 12 of 18
// # Task
// Override a specified method of an object with new functionality while still maintaining all of the old behaviour.
// Create a spy that keeps track of how many times a function is called.
// ## Example
//    var spy = Spy(console, 'error')
//    console.error('calling console.error')
//    console.error('calling console.error')
//    console.error('calling console.error')
//    console.log(spy.count) // 3
// ## Arguments
//  * target: an object containing the method `method`
//  * method: a string with the name of the method on `target` to spy on.
// ## Conditions
//  * Do not use any for/while loops or Array#forEach.
//  * Do not create any unnecessary functions e.g. helpers.
// ## Hint
//  * Functions have context, input and output. Make sure you consider the context, input to *and output from* the function you are spying on.

function Spy(target, method) {
    let results = { count: 0 }
    // save original method
    let originalFunction = target[method]
    // overwrite original function
    target[method] = function() {
        // apply all spy functionality you want
        results.count++
        // call original function
        return originalFunction.apply(target, arguments)
    }
    // the spy itself only returns the 'stats'
    return results
}

module.exports = Spy;

// A spy is an object in testing that tracks calls made to a method. By tracking its calls, 
// we can verify that it is being used in the way our function is expected to use it.

// LINK WITH EXPLANATION - https://essais.co/on-spy-functions-in-js/