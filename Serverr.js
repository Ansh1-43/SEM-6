const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/' ){
        fs.readFile('index.html', 'utf8' , (err, htmlcontent) => {
            if (err){
                res.statusCode = 500;
                res.end('internal server error');
                return;
            }
            res.setHeader(' content.Type', 'text/css');
            res.end(cssContent);
        });
    }else{
        res.statusCode = 404;
        res.end('Not Found');
    }
});
const port = 3000;
server.listen(port , () => {
    console.log(`server running on port ${port}`);
});