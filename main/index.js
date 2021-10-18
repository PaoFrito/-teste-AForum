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
    var name = "Joaozinho";
    var language = "NodeJS";
    var title = "Podem me Ajudar? :(";

    res.render("index",{
        name: name,
        language: language,
        title: title
    });
});

//Iniciando Servidor
app.listen(3000,()=>{console.log("Servidor Iniciado com Sucesso!");});