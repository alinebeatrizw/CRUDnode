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
    res.render("home")
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

//ativando servidor
app.listen(8081, function(){
    console.log("servidor rodando")
});