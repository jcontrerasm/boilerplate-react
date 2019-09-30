const React = require('react');
// const ServerClient = require('./ssr');
const express = require('express');
// const ReactDOM = require('react-dom/server');
// const template = require('./ssr/template');

const app = express();

if (process.env.NODE_ENV === 'development') {
  const devMiddleware = require('webpack-dev-middleware');
  const hotMiddleware = require('webpack-hot-middleware');
  const webpack = require('webpack');
  const config = require('../../config/webpack/webpack.server.config');
  const compiler = webpack(config);
  app.use(devMiddleware(compiler));
  app.use(hotMiddleware(compiler));
}

app.get('/', (req, res) => {
  res.send('Hello !!');
});

// app.get('*', (req, res) => {
//   const context= {};
//   const App = (<ServerClient location={req.url} context={context} />);
//   const content = ReactDOM.renderToString(App);
//   res.status(200);
//   res.send(`<!doctype html>\n${template(content)}`);
//   res.end();
// });

app.listen(8000, () => console.log('Listening on port 8000!'));
