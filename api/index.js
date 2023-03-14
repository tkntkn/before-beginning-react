const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  
  response.write(`
    <script type="module">
      setInterval(() => {
        document.body.textContent = new Date().toLocaleString();
      }, 1000);
    </script>
  `);

  response.end();
})

server.listen('80', 'localhost');
