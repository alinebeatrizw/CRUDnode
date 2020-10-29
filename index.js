const express = require ("express"); //rotas
const app = express();
const handlebars = require ("express-handlebars"); // monta o html com handlebars
const bodyParser = require ("body-parser"); //body parser pega os dados do form no html
const Sequelize = require("sequelize"); //  conecta com o mysql



//config handlebars
    //template engine
    app.engine("handlebars", handlebars({defaultLayout:"main"}));
    app.set("view engine", "handlebars");


//config body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//conectando ao banco
const sequelize = new Sequelize("cadastro", "root", "12345", {
    host: "localhost",
    dialect: "mysql"
});


//rotas

app.get("/cad", function(req,res){
    res.render("formulario")
})

app.post("/add", function(req,res){
    res.send("Texto: " + req.body.titulo+"Conteudo: "+ req.body.conteudo)
})

//ativando servidor
app.listen(8081, function(){
    console.log("servidor rodando")
});