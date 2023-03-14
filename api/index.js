const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  
  response.write(`
    <script src="data:text/javascript,
      console.log(true);
    "></script>
  `);

  response.end();
})

server.listen('80', 'localhost');
