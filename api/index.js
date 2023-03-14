const http = require('node:http');
const messages = [];

const server = http.createServer((request, response) => {
  messages.push(request.url);
  
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  response.write(messages.join(" "));
  response.end();
})

server.listen('80', 'localhost');
