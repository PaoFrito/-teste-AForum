//cd c:\users\"computer store 04"\desktop\projetos\"-teste-AForum"\main

//Importando e inicializando Express
const express = require("express");
const app = express();

//Setando princial
app.get("/",(req,res)=>{
    res.send("Bem Vindo ao AForum!");
});


//Iniciando Servidor
app.listen(3000,()=>{
    console.log("Servidor Iniciado com Sucesso!");
});