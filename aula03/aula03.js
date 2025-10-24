import http from 'http';

const servidor = http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':'text/html'});
    if(req.url == '/'){
        res.write(`<h1>seja bem-vindo</h1>`);
    }else if(req.url == "/canal"){
        res.write(`<h1>CFB Cursos</h1>`);
    }
    res.end();
})
servidor.listen(8081, ()=>{
    console.log(`servidor rodando no http://localhost:8081`);
})