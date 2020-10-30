const express = require ("express"); //rotas
const app = express();
const handlebars = require ("express-handlebars"); // monta o html com handlebars
const bodyParser = require ("body-parser"); //body parser pega os dados do form no html
const Post = require("./models/Post");

//config handlebars
    //template engine
    app.engine("handlebars", handlebars({defaultLayout:"main"}));
    app.set("view engine", "handlebars");


//config body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())




//rotas

app.get("/", function(req, res){
    //.all retorna os registros do banco de dados
    //{order:[["id", "DESC"]]} ordena do mais novo para mais antigo
    Post.findAll({order:[["id", "DESC"]]}).then(function(posts){
        res.render("home", {posts: posts})
    })
    
})

app.get("/cad", function(req,res){
    res.render("formulario")
})

app.post("/add", function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect("/")
    }).catch(function(erro){
        res.send("Erro, " + erro)
    })
})

app.get("/deletar/:id", function(req,res){
    Post.destroy({where: {"id": req.params.id}}).then(function(){
        res.send("Postagem deletada")
    }).catch(function(erro){
        res.send("Essa postagem nao existe")
    })
})

//ativando servidor
app.listen(8081, function(){
    console.log("servidor rodando")
});