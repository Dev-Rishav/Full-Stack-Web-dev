const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const pathName = req.url;

  const data = fs.readFileSync("./testapi.json", "utf-8");
  const dataObj = JSON.parse(data);

  if (pathName === "/") res.end("This is home page");
  else if (pathName === "/about") res.end("This is about section");
  else if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data); //!end() expects string to be passed not object
  } else {
    res.writeHead(404, {
      "content-type": "html/Text",
    });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(8001, () => {
  console.log("Listening to port 8001");
});
