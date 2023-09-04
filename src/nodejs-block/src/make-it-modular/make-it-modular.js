const providedPath = process.argv[2]; // example // D:\Desktop\REFACTOR\NodeJSLearning\
const extension = process.argv[3];

const myModule = require('./mymodule.js');

myModule(providedPath,extension, (error, data)=> {

    if(error)
        return console.error(error);

    data.forEach(file => {console.log(file); });
})