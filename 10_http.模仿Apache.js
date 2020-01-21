var http = require('http')
var fs = require('fs')
var wwwDir = 'E:/模仿Apache/app/www/'
const server = http.createServer();
server.on('request', function (req, res) {
    var url = req.url;
    if (url === '/') {
        fs.readFile(wwwDir+'index.html', function (error, data) {
            if (error) {
                return res.end('not found 404')
            }
            res.end(data)
        })
    }
    else if(url==='/a'){
        fs.readFile(wwwDir+'a.txt',function(error,data){
        if (error) {
            return res.end('not found 404')
        }
        res.end(data)
    })
    }
    else if(url==='/login'){
        fs.readFile(wwwDir+'login.html',function(error,data){
        if (error) {
            return res.end('not found 404')
        }
        res.end(data)
    })
    }  
    else if(url==='/index'){
        fs.readFile(wwwDir+'index.html',function(error,data){
        if (error) {
            return res.end('not found 404')
        }
        res.end(data)
    })
    }  
    else if(url==='/img'){
        fs.readFile(wwwDir+'guanliqianbao.png',function(error,data){
        if (error) {
            return res.end('not found 404')
        }
        res.end(data)
    })
    }  
})
server.listen('3000', function () {
    console.log('The Server is running')
})