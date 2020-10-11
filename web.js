const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "127.0.0.1";
const port = 3000;
/*const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type","text/plain");
    res.end("Hello World"); });*/
const handler = (req, res) => {
    const filename = path.join(__dirname, `index.html`)
    const indexData = fs.readFileSync(filename)
    res.end(indexData)
    /*res.end(`
    <div>
    <h2 style="color": #ff3456;">Hello Software Engineering !</h2>
    <p style="color: #22dd55;">This is node.js workshop </p>
    </div>
    `);
};*/
}
const server = http.createServer(handler);

server.listen(port, hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});