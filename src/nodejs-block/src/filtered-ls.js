// For console input arguments
const providedPath = process.argv[2]; // example // D:\Desktop\REFACTOR\NodeJSLearning\
const extension = '.' + process.argv[3];

const fs = require('fs');
const path = require('path');

const callback = (err, files) =>{
    if(err)
        return console.error(err);
    
    /* force solution */
    // const filesWithSpecificFileExtension = files.filter( file => path.extname(file) === extension);
    // for(const file of filesWithSpecificFileExtension)
    //    console.log(file);*/

    // Better solution - no extra variables, and simpler
    files.forEach(file => {
        if(path.extname(file) === extension)
            console.log(file);
    });
}

fs.readdir(providedPath, callback);