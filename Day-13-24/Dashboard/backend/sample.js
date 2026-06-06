var http = require('http');

http.createServer((req, res) => {
    res.write("<h1>Welcome Node js server is Running</h1>");
    res.end();
}).listen(3000);