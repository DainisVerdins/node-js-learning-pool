//Exercise 8
/**Task:
Write a function duckCount that returns the number of 
arguments passed to it which have a property 'quack' defined directly on them. 
Do not match values inherited from prototypes.
Example:
    var notDuck = Object.create({quack: true})
    var duck = {quack: true}
    duckCount(duck, notDuck) // 1
# Arguments
  * You will be passed 0-20 arguments. Each argument could be of any type with any properties. 
  * Some of these items will have a 'quack' property. 
 */
function duckCount() {
  // if using const duckCount => () => {} will not work by some reason =(
  return Array.prototype.filter.call(arguments, (obj) => {
    return Object.prototype.hasOwnProperty.call(obj, "quack"); // this checks if obj object have property quack
  }).length;
}

module.exports = duckCount;
