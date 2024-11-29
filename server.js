const http = require("http");
const port = 8080;
const server = http.createServer((req, res) => {
  // res.writeHead(200, { "Content-Type": "text/html" });
  res.writeHead(200, { "Content-Type": "application/json" });
  res.write("Hello Node ! 🤳");
  console.log(req.url);

  res.end();
});
server.listen(port, () => {
  console.log(`Mon serveur sur écoute sur le port ${port} `);
});
