const url = require("url");
const http = require("http");
const { hostname } = require("os");

const myUrl =
  "https://www.google.com/search?q=meetup&rlz=1C1GCEB_enBJ1131BJ1131&oq=meetup&gs_lcrp=EgZjaHJvbWUyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDU5MTZqMGoxqAIIsAIB&sourceid=chrome&ie=UTF-8";

const testUrl1 =
  "https://www.example.com/search?lesson=nodejs&category=programming&sort=asc";

const parsedUrl = new URL(testUrl1);
console.log(parsedUrl);
const customUrl = {
  hostname: "www.auresaz.io",
  port: "3000",
  search: "lesson=nodejs&lesson=beginner",
  pathname: "/learn/5",
  protocol: "https",
};
//console.log(url.format(customUrl));

const port = 9100;
const server = http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(`La lesson est :${parsedUrl.searchParams.get("lesson")} <br>
       La catégorie est : ${parsedUrl.searchParams.get("category")}<br>
       Le sort est : ${parsedUrl.searchParams.get("sort")}<br>`);
    res.end();
  })
  .listen(port, () => console.log(`listening on port ${port}...`));
