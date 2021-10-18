//cd c:\users\"computer store 04"\desktop\projetos\"-teste-AForum"\main

//Importando e inicializando Express
const express = require("express");
const app = express();

app.set('view engine','ejs');

//Setando princial
app.get("/",(req,res)=>{res.render("index");});

//Iniciando Servidor
app.listen(3000,()=>{console.log("Servidor Iniciado com Sucesso!");});