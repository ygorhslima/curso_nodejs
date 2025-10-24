import http from 'http';
import fs from 'fs';

const server = http.createServer((req,res)=>{
    fs.readFile('site.html',(err,arquivo)=>{
        res.writeHead(200,{"content-type":"text/html"});
        res.write(arquivo);
        return res.end();
    });
});

server.listen(8081, ()=>{
    console.log("servidor rodando");
});