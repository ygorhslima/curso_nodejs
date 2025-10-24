import http from 'http'

//exemplos de status de servidor: https://http.cat 

const server = http.createServer((requisicao,resposta)=>{
    resposta.writeHead(200,{'content-type':'text/plain'});
    resposta.write('CFB cursos\n');
    resposta.end();
})

server.listen(8081,()=>{
    console.log("servidor rodando na porta http://localhost:8081")
})