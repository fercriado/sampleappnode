var http = require('http');

var server = http.createServer((req, res) => {
    const remIP = res.socket.remoteAddress;
    const remPort = res.socket.remotePort;
    var msg = `Your IP address is ${remIP} and your source port is ${remPort}.`;
    console.log(msg);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(msg);
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log('Server running at http://localhost:%d\n', port);
