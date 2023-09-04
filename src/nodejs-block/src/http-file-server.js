const portToListen = Number(process.argv[2]);
const locationOfFile = process.argv[3];

const http = require("http");
const fs = require("fs");

const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "text/plain" });

  fs.createReadStream(locationOfFile).pipe(response);
});
server.listen(portToListen);
