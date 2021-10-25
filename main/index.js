//cd c:\users\"computer store 04"\desktop\projetos\"-teste-AForum"\main

//Importando e inicializando Express
const express = require("express");
const app = express();

//Setando EJS como View Engine
app.set('view engine','ejs');

//Setando Diretório de arquivos estáticos
app.use(express.static('public'));

//Setando princial
app.get("/",(req,res)=>{
    res.render("index");
});

app.get("/thread",(req,res)=>{
    res.render("thread");
});

app.post("/createThread",(req,res)=>{
     
});

//Iniciando Servidor
app.listen(3000,()=>{console.log("Servidor Iniciado com Sucesso!");});