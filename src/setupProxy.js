const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    ['/user'],
    createProxyMiddleware({
      target: 'http://5.161.104.54:8080',
      changeOrigin: true,
    })
  );
};