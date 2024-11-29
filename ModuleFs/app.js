const http = require("http");
const fs = require("fs");
const port = 8082;

const server = http.createServer((req, res) => {
  //   fs.readFile("index.html", (err, data) => {
  //     if (err) {
  //       console.log(`Quelque chose se passe${err}`);
  //     } else {
  //       res.writeHead(200, { "Content-Type": "text/html  ;charset=utf-8" });
  //       res.write(data);
  //     }
  //     res.end();
  //   });

  fs.appendFile(
    "about.html",
    `<h1 style="color: rgb(109, 238, 109);">Page About</h1>`,
    (err) => {
      if (err) throw err;
    }
  );
  res.end();
});
server.listen(port, () => console.log(`listening on port ${port}...`));
