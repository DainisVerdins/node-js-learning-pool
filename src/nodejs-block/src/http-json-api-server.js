const portToListen = Number(process.argv[2]);
console.log(portToListen);
const http = require("http");
require("url");

const server = http.createServer((request, response) => {
  // check if request is Get type
  if (request.method !== "GET") return response.end("send me a Get\n");
  
  response.writeHead(200, { 'Content-Type': 'application/json' })

  const urlData = new URL(request.url, "http://example.com");
  const date = new Date(urlData.searchParams.get("iso"));

  if (urlData.pathname === "/api/parsetime") {
    const dateJson = JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() });
    
    response.end(dateJson);
  } else if (urlData.pathname === "/api/unixtime") {
    const dateJson = JSON.stringify({ unixtime: date.getTime() });
    response.end(dateJson);
  }
});
server.listen(portToListen);
