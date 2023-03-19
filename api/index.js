const http = require('node:http');
const messages = [];

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=UTF-8');

  if (request.url === "/favicon.ico") {
    // 何も返さない
  } else if (request.url === "/") {
    response.write("メッセージを送ってください。");
  } else {
    messages.push(request.url);
    
    let text = "";
    for (const message of messages) {
      text += `${decodeURIComponent(message).slice(1)}\n`;
    }

    response.write(text);
  }

  response.end();
});

server.listen('80', 'localhost');
