
const net = require('net');
const portNumber = process.argv[2] || 8080;

const server = net.createServer((socket) => {
  let time = Math.floor(new Date() / 1000)

  let email = time + "@asgharlabs.io"

  socket.write("email is: " + email);
  socket.end("\n");

}).on('error', (err) => {
  // handle errors here
  throw err;
});


server.listen(portNumber);
