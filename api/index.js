const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  
  if (request.url === "/javascript") {
    response.write(`ジャバスクリプト`);
  } else if (request.url === "/server") {
    response.write(`サーバー`);
  } else {
    response.write(`分かりません。`)
  }

  response.end();
})

server.listen('80', 'localhost');
