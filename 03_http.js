const http = require('http');
let server = http.createServer();
server.on('request',function(){
    console.log('接收到客服端请求了')
})

server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过127.0.0.1:3000/访问了')
})