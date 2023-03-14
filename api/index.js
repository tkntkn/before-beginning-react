const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  
  response.write(`
    <script type="module">
      document.body.style.color = "blue";
      document.body.style.backgroundColor = "lime";
      document.body.style.fontSize = "50px"
      document.body.style.padding = "30px";

      setInterval(() => {
        document.body.textContent = new Date().toLocaleString();
      }, 1000);

    </script>
  `);

  response.end();
})

server.listen('80', 'localhost');
