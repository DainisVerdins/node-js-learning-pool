const url = process.argv[2];

const bl = require('bl');
const http = require('http');


http.get(url, (response) => {      
    response.pipe(bl(function (err, data) {
        if(err)
            return console.error(err);
        
        data = data.toString();
        console.log(foo.length);
        console.log(foo);
     }))
  }).on('error', console.error); // this on on request itself if status code is not 200