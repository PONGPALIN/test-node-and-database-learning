const http = require('node:http');
let listener = (req,res) => {
    res.setHeader("name","pongpalin");
  


    res.writeHead(200);
    res.end("<h1>hello</h1>");
}
let server = http.createServer(listener);

server.listen(8000);


// const http = require('node:http');

// // Create a local server to receive data from
// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify({
//     data: 'Hello World!',
//   }));
// });

// server.listen(8000); 
