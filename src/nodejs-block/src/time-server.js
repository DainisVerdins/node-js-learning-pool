const portToListen = Number(process.argv[2]);

const net = require('net');
const strftime = require('strftime');

const server = net.createServer((socket) => {
    const data = strftime('%F %H:%M\n', new Date());
    socket.end(data);
})
server.listen(portToListen);