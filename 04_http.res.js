const http = require('http');
let server = http.createServer();
server.on('request',function(request,response){
    console.log('接收到客服端请求了'+request.url)
    response.write('hello 你好呀！！！')
    response.write('node.js真好玩')
    response.end()   // wirte可以使用多次，但是最后一定要用end来结束响应
})

server.listen(3000,function(){
    console.log('服务器启动成功了，可以通过127.0.0.1:3000/访问了')
})