
const http = require('http');

var server = http.createServer(function(request, response) {
  let time = Math.floor(new Date() / 1000);

  let email = time + "@asgharlabs.io";

  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("email is: " + email);

});

var port = 8080;
server.listen(port);
