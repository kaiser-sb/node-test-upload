const http = require("http");
const server = http.createServer((req, res) =>
{
    if (req.url === "/")
    {
        res.write("Welcome to our home page!");
        res.end();
    }
    else if (req.url === "/about")
    {
        res.end("This is a short history about our company");
    }
    else
    {
        res.end(`
    <h1>Oops!</h1>
    <p>We don't seem to have the page you requested!</p>
    <a href= "/">Back to Home Page</a>
    `)
    }
})

server.listen(8080);