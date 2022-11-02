const http = require ("http");

const server = http.createServer();

server.on("request", (req, res) => {
    if(req.url == "/"){
        res.end("Welcome to the Home Page");
    }
})
server.listen(5000, () => {
    console.log("Server is listening to port 5000.......")
})