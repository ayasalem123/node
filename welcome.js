const fs=require("fs");
fs.writeFile("welcome.txt","hello node",(err)=>console.log(err))
fs.readFile('welcome.txt', 'utf8',(err,data)=>console.log(data))