const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/teste-front-end',
        createProxyMiddleware({
            target: 'https://app.econverse.com.br',
            changeOrigin: true,
        })
    );
};
