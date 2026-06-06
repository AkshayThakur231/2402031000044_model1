const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    fs.readFile("index.html", (err, data) => {

        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error loading file");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);

    });

}).listen(8080);