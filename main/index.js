//cd c:\users\"computer store 04"\desktop\projetos\"-teste-AForum"\main

const express = require("express");
const app = express();


app.get("/",(req,res)=>{
    res.send("Bem Vindo ao AForum!");
});

app.listen(3000,()=>{
    console.log("Servidor Iniciado com Sucesso!");
});