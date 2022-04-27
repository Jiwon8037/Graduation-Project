const {createProxyMiddleware}=require('http-proxy-middleware');

module.exports=function(app){
    app.use(createProxyMiddleware('/getData',{
        target:'http://localhost:8080/',
        changeOrigin:true,
    })),
    app.use(createProxyMiddleware('/api/register',{
        target:'http://localhost:8080/',
        changeOrigin:true,
    }))
    app.use(createProxyMiddleware('/api/login',{
        target:'http://localhost:8080/',
        changeOrigin:true,
    }))
}