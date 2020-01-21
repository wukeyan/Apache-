var http = require('http')
var fs = require('fs')
var server = http.createServer()
// fs.readdir('E:/模仿Apache/app/www',function (error,data){
//     if(error){
//         console.log('目录不存在')
//     }
//     console.log(data)
// })


server.on('request',function(req,res){
    fs.readFile('./resource/index2.html', function(error,data){
        if(error){
            return res.end('文件找不到');
        } 
        data = data.toString()
        data = data.replace('Mark','@#@')
        res.end(data)
    })
})

server.listen(3000,function (){
    console.log('Running')
})