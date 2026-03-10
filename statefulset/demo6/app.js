const http = require("http");

const server = http.createServer((req, res) => {
	  res.write("Hello from Node.js Multi-stage Container!");
	  res.end();
});

server.listen(3000);
