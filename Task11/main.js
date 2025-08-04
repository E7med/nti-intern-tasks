const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        fs.readFile('homepage.html', 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading homepage.html: ', err);
                res.end("404 Error");
                return;
            }
            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
        });
    } else if (req.url === '/services') {
        fs.readFile('services_page.html', 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading services_page.html: ', err);
                res.end("404 Error");
                return;
            }
            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
        });
    } else if (req.url === '/fleet') {
        fs.readFile('fleet_page.html', 'utf-8', (err, data) => {
            if (err) {
                console.error('Error reading fleet_page.html: ', err);
                res.end("404 Error");
                return;
            }
            res.writeHead(200, { "content-type": "text/html" });
            res.end(data);
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found");
    }
});

server.listen(7000, () => {
    console.log('Server running at http://localhost:7000');
});