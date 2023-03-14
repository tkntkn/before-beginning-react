const http = require('node:http');
const messages = [];

const server = http.createServer((request, response) => {
  messages.push(request.url);
  
  response.setHeader('Content-Type', 'text/plain; charset=UTF-8');
  
  let text = "";
  for (const message of messages) {
    if (message !== "/favicon.ico") {
      text += decodeURIComponent(message).slice(1);
      text += "\n";
    }
  }
  
  response.write(text);
  response.end();
})

server.listen('80', 'localhost');
