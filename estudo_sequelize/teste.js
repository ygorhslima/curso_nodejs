import { Sequelize } from "sequelize"

const sequelize = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

const Postagem = sequelize.define('postagens',{
    titulo:{
        type: Sequelize.STRING,
    },
    conteudo:{
        type: Sequelize.TEXT
    }
});

const Usuario = sequelize.define("usuarios",{
    nome:{type:Sequelize.STRING},
    sobrenome:{type:Sequelize.STRING},
    idade:{type:Sequelize.INTEGER},
    email:{type:Sequelize.STRING}
});

Usuario.create({
    nome:"Victor",
    sobrenome:"Lima",
    idade:30,
    email:"victor@email.com"
});

Postagem.sync({force:true});
Usuario.sync({force:true});

/**para verificar a autenticação do banco de dados */
sequelize.authenticate()
.then(()=>{
    console.log("Conectado com Sucesso!")
})
.catch((error)=>{
    console.log("falha ao se conectar ", error)
})