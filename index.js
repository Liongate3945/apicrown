const http = require('http');
var path = require('path');
var fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    console.log('RE');
    res.write('lol');
    res.end();
  }
  else if (req.url == '/token') {
    console.log("EEE");
    if (req.body && req.body.token != null) {
      if (req.body.token == "LOL)K)L)((&?%") {
        res.write(JSON.stringify({ validation: "Valid" }));
        res.end();
      }
      else {
        res.write(JSON.stringify({ validation: "Invalid" }));
        res.end();
      }
    }
    res.write(JSON.stringify({ validation: "error" }));
    res.end();
  }
});

server.listen(process.env.PORT)
