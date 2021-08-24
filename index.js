var httpProxy = require("http-proxy");
var devcert = require("devcert");

function startProxy(ssl) {
  httpProxy
    .createServer({
      target: {
        host: process.env.HOST,
        port: process.env.SERVICE_PORT,
      },
      ssl: ssl,
    })
    .listen(process.env.LISTEN_PORT);
}
devcert.certificateFor("localhost.com").then((ssl) => startProxy(ssl));
