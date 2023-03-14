const http = require('node:http');
const message = []

const server = http.createServer((request, response) => {
  message.push(request.url);
  
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  response.write(messages.join(" "));
  response.end();
})

server.listen('80', 'localhost');
