const fs = require('fs');


const content = fs.readFileSync(process.argv[2]);

const str = content.toString();
const amountOfLines = str.split('\n').length-1;
console.log(amountOfLines);