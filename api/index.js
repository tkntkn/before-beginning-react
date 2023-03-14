const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  
  response.write(`
    <script type="module">
      document.body.color = "blue";
      document.body.backgroundColor = "lime";
      document.body.fontSize = "50px"
      document.body.padding = "30px";

      setInterval(() => {
        document.body.textContent = new Date().toLocaleString();
      }, 1000);

    </script>
  `);

  response.end();
})

server.listen('80', 'localhost');
