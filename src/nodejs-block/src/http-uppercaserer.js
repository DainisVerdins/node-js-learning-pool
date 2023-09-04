const portToListen = Number(process.argv[2]);

const http = require("http");
const fs = require("fs");
const mapec = require("through2-map"); //function takes a chunk of data and returns a chunk of data

const server = http.createServer((request, response) => {
  // check if request is POST type
  if (req.method !== "POST") {
    return res.end("send me a POST\n");
  }

// ,pipe()
// The concept of pipe is simple — it combines n functions.
// It’s a pipe flowing left-to-right, calling each function with the output of the last one.

  request // input stream
    .pipe( // combines function (in this case streams)
      mapec((chunk) => { // function takes a chunk of data and returns a chunk of data
        return chunk.toString().toUpperCase(); // convert chunk of stream data into string and apply toUpperCase()
      })
    )
    .pipe(response); // put into response converted data and response will send it to sender

});
server.listen(portToListen);
