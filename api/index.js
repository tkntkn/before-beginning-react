const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  response.write(`こんにちは。 {request.url}`);
  response.end();
})

server.listen('80', 'localhost');
