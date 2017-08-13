const app = require('./src/app');

var port = 8080;
const server = app.listen(port, function () {
  console.log('App running on port', port);
});

server.timeout = 10000;
