const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/getData", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/register", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/login", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/makeSchedule", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/myPageList", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/myPlan", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/publicPageList", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/publicPlan", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/logout", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/register/email", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/publicPlan/liked", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api/edit", {
      target: "http://localhost:8080/",
      changeOrigin: true,
    })
  );
};
