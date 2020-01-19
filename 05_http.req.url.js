const http = require('http');
let server = http.createServer();
server.on('request', function (req, res) {
    var url = req.url;
    //   if(url ==='/'){
    //         res.end('index page') 
    //   }
    //   else if(url === '/login'){
    //       res.end('login page')
    //   }
    //   else
    //   res.end('404 not found')

    if (url === '/product') {
        var product = [
            { name: 'apple', price: 8888 },
            { name: '菠萝', price: 4546 },
            { name: '小辣椒', price: 1999 }
        ]
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end(JSON.stringify(product) + '1') //JSON.stringify() 将数组转化为字符串
    }
})

server.listen(3000, function () {
    console.log('服务器启动成功了，可以通过127.0.0.1:3000/访问了')
})