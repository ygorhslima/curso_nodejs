import http from 'http'

const server = http.createServer((requisicao,resposta)=>{
    resposta.end("olá")
}).listen(8081)

console.log("O servidor rodando!")