const bancoDados = require("./db");

const Post  = bancoDados.sequelize.define("postagens",{
    titulo:{
        type: bancoDados.Sequelize.STRING,
    },
    conteudo:{
        type: bancoDados.Sequelize.TEXT
    }
});

module.exports = Post;