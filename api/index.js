const http = require('node:http');

const server = http.createServer((request, response) => {
  response.setHeader('Content-Type', 'text/html; charset=UTF-8');
  
  response.write(`
    <script type="module">
      document.body.style.color = "blue";
      document.body.style.backgroundColor = "skyblue";
      document.body.style.fontSize = "50px"
      document.body.style.padding = "30px";
      
      const node1 = document.createTextNode("こんにちは！");
      const node2 = document.createElement("div");
      const node3 = document.createTextNode("ようこそ！");
      node2.style.color = "red";
      node2.style.backgroundColor = "teal"
      node2.style.fontSize = "30px";

      document.body.appendChild(node1);
      document.body.appendChild(node2);
      node2.appendChild(node3);
    </script>
  `);

  response.end();
})

server.listen('80', 'localhost');
