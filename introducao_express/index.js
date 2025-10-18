import express from 'express';
import path from 'path';
// recebendo a função do express
//qualquer coisa que você utilizar do express vem desta constante
const app = express();
const __dirname = path.resolve();

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get('/sobre',(req,res)=>{
    res.send("Minha pagina sobre");
});

app.get("/blog",(req,res)=>{
    res.send("bem vindo ao meu blog");
});

app.get("/ola/:nome/:cargo/:cor",(req,res)=>{
    res.send(`
        <h1>ola ${req.params.nome}</h1> 
        <p>a sua profissão é ${req.params.cargo}</p><br>
        e sua cor favorita é ${req.params.cor} <br>
    `); // você só pode usar uma send em um get
});

app.listen(8081, ()=>{
    console.log("servidor rodando na url http://localhost:8081");
}); // ela é a última linha do código da aplicação

/**nodemon
 * 
 * importação muito importante no node, para automatizar o processo de iniciar e desligar o servidor
 * npm install nodemon
 * 
*/
