const url = process.argv[2];

const http = require('http');

/*
http.get(url,(response) => {
    response.on('error', (error) => {
        console.error(error);
    });
    response.setEncoding('utf8');
    response.on('data', (data) => {
        console.log(data);
    });
});*/
// Smooth solution
http.get(url, (response) => {      
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
  }).on('error', console.error); // this on on request itself if status code is not 200