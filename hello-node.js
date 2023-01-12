const { read } = require("fs");
const http=require("http");
http.createServer((req,res)=>{
    console.log(req)
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello node!</h1>')
    res.end()
}).listen(300)