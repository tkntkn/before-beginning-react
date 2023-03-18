const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  response.write(`
    <script type="module">
      const textNode = document.createTextNode("こんにちは！");
      document.body.appendChild(textNode);
      setInterval(() => {
        textNode.data = new Date().toLocaleString();
      }, 5000);
    </script>
  `);
  response.end();
});

server.listen('80', 'localhost');
