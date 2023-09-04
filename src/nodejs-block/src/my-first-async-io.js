const fs = require('fs');
const fileName = process.argv[2];

const callback = (err, content) =>{
    if(err)
        return console.log(err);
    const amountOfLines = content.toString().split('\n').length-1;
    console.log(amountOfLines);
}

const content = fs.readFile(fileName, callback);