//cd c:\users\"computer store 04"\desktop\projetos\"-teste-AForum"\main

//Importando e inicializando Express
const express = require("express");
const app = express();

//Importando Body-Parser
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Conectando com a DB
const connection = require("./model/DAO");
connection.authenticate()
    .then(()=>{console.log("[ Conectado ao BD! ]")})
    .catch((ERROR)=>{console.log(ERROR)});

//Importando models
const threadModel = require("./model/threadModel"); 

//Setando EJS como View Engine
app.set('view engine','ejs');

//Setando Diretório de arquivos estáticos
app.use(express.static('public'));

//Setando princial
app.get("/",(req,res)=>{
    res.render("index");
});

//rotada da página de criação de threads
app.get("/thread",(req,res)=>{
    res.render("thread");
});

//Creat Thread
app.post("/createThread",(req,res)=>{
    var title = req.body.title;
    var content = req.body.content;

     
});

//Iniciando Servidor
app.listen(3000,()=>{console.log("[ Servidor Iniciado com Sucesso! ]");});