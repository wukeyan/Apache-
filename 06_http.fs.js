var http = require('http');
var fs = require('fs');
var server = http.createServer();
server.on('request',function(req,res){
    // console.log('shoudao')
    if(req.url==='/'){
        fs.readFile('./resource/index.html',function(error,data){
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('打开文件失败')
            }
            else{
                res.setHeader('Content-Type','text/html;charset=utf-8')
                res.end(data)
            }
        })
    }
    else if(req.url==='/beautiful'){
        fs.readFile('./resource/美背景.jpg',function(error,data){
            if(error){
                res.setHeader('Content-Type','text/plain;charset=utf-8')
                res.end('打开文件失败') 
            }
            else
            res.setHeader('Content-Type','image/jpeg')
            res.end(data) 
        })
    }
    else{
        res.setHeader('Content-Type','text/plain;charset=utf-8')
        res.end('打开文件失败，请检查路径是否正确') 
    }
})
server.listen(3000,function(){
 console.log('The Server is running')
})