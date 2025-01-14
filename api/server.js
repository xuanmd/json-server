const jsonServer = require('json-server');
const jsonServerAuth = require('json-server-auth');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);

const rules = jsonServerAuth.rewriter({
  // Permission rules
  users: 600,
  products: 644,
  carts: 600,
});

server.use(rules);
server.use(jsonServerAuth);
server.use(router);

server.listen(port);

// Export the Server API
module.exports = server;
