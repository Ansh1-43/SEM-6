const http = require("http");
const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Welcome to node js server Tutorial");
});
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
});