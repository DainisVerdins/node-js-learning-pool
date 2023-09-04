const fs = require('fs');
const path = require('path');

module.exports = function (dirName, fileExtension, callback) {
    
    fs.readdir(dirName, (err, files)=> {
        if(err)
            return callback(err);
    
        const filesWithSpecificExtension = files.filter(file => path.extname(file) === `.${fileExtension}`);
        return callback(null, filesWithSpecificExtension);
    });
};