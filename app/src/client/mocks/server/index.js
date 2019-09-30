const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router(__dirname + '/database.json');

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
  '/authentication': '/authentication',
}));
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  setTimeout(() => {
    if (req.method === 'POST') {
      req.body.createdAt = Date.now();
    }
    next();
  }, 2000);
});
server.use(router);

server.listen(8000, () => console.log('JSON Server is running!'));
