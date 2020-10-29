const express = require ("express");
const app = express();
const handlebars = require ("express-handlebars");
const Sequelize = require("sequelize");



//config handlebars
    //template engine
    app.engine("handlebars", handlebars({defaultLayout:"main"}));
    app.set("view engine", "handlebars");

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
    res.send("form recebido")
})

//ativando servidor
app.listen(8081, function(){
    console.log("servidor rodando")
});