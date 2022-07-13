const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://5.161.104.54:8082',
      changeOrigin: true,
    })
  );
};