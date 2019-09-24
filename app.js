
const net = require('net');
const portNumber = process.argv[2] || 8000;

const server = net.createServer((socket) => {
  let time = Math.floor(new Date() / 1000)

  // Uncomment the following for a v2 that adds the full date: 2019-08-13 12:47
  //let formattedDate = date.getFullYear() + "-" + month  + "-" + monthDate + " " + hours + ":" + minutes ;
  let email = time + "@asgharlabs.io"

  socket.write("email is: " + email);
  socket.end("\n");

}).on('error', (err) => {
  // handle errors here
  throw err;
});


server.listen(portNumber);
