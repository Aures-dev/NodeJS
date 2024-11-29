const http = require("http");
const fs = require("fs");
const port = 8081;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        console.log(`il s'est passé quelque chose${err}`);
      } else {
        res.writeHead(200, { "Content-Type": "text/html ; charset=utf-8" });
        res.write(data);
      }
      res.end(`L'url est ${req.url}`);
    });
  } else if (req.url == "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) {
        console.log(`il s'est passé quelque chose${err}`);
      } else {
        res.writeHead(200, { "Content-Type": "text/html ; charset=utf-8" });
        res.write(data);
      }
      res.end(`L'url est ${req.url}`);
    });
  } else if (req.url == "/services") {
    fs.readFile("services.html", (err, data) => {
      if (err) {
        console.log(`il s'est passé quelque chose${err}`);
      } else {
        res.writeHead(200, { "Content-Type": "text/html ; charset=utf-8" });
        res.write(data);
      }
      res.end(`L'url est ${req.url}`);
    });
  } else if (req.url == "/produits") {
    fs.readFile("products.html", (err, data) => {
      if (err) {
        console.log(`il s'est passé quelque chose${err}`);
      } else {
        res.writeHead(200, { "Content-Type": "text/html ; charset=utf-8" });
        res.write(data);
      }
      res.end(`L'url est ${req.url}`);
    });
  } else {
    fs.readFile("error404.html", (err, data) => {
      if (err) {
        console.log(`il s'est passé quelque chose${err}`);
      } else {
        res.writeHead(200, { "Content-Type": "text/html ; charset=utf-8" });
        res.write(data);
      }
      res.end(`L'url est ${req.url}`);
    });
  }
});
server.listen(port, () => console.log(`serveur en écoute sur le port ${port}`));
