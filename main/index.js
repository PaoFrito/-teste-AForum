//cd c:\users\"computer store 04"\desktop\projetos\"-teste-AForum"\main

//Importando e inicializando Express
const express = require('express');
const app = express();

const PORT = 3000;

//Importando Body-Parser
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//Conectando com a DB
const connection = require("./model/DAO");
const thread = require('./model/threadModel');
connection.authenticate()
    .then(()=>{console.log("[ Conectado ao BD! ]")})
    .catch((ERROR)=>{console.log(ERROR)});

//Importando models
const threadModel = require("./model/threadModel"); 
const answerModel = require("./model/answerModel");
const answer = require('./model/answerModel');

//Setando EJS como View Engine
app.set('view engine','ejs');

//Setando Diretório de arquivos estáticos
app.use(express.static('public'));

//Setando princial
app.get("/",(req,res)=>{
    threadModel.findAll({raw:true, order: [
        ['createdAt','DESC'] //ASC = Crescente || DESC = Decrescente
    ]}).then(threads => {
        res.render("index",{
            threads: threads
        });
    });
});

//rotada da página de criação de threads
app.get("/newthread",(req,res)=>{
    res.render("thread");
});

//Creat Thread
app.post("/createThread",(req,res)=>{
    var title = req.body.title;
    var content = req.body.content;
    threadModel.create({
        title: title,
        content: content
    }).then(()=>{
        res.redirect("/");
    });    
});

app.get("/thread/:id", (req, res)=>{
    var id = req.params.id;
    threadModel.findOne({
        where: {id:id}
    }).then(thread =>{
        if(thread != undefined){
            answerModel.findAll({
                where: {threadId:thread.id}
            }).then(answer=>{
                res.render("threadPage", {
                    thread: thread,
                    answer: answer
                });
            })

        }else{
            res.redirect("/");
        }
    });
});

app.post("/saveAnswer", (req, res)=>{
    var content = req.body.content;
    var threadId = req.body.threadId;
    answerModel.create({
        content: content,
        threadId: threadId
    }).then(()=>{
        res.redirect("/thread/" + threadId); 
    });  
});

//Iniciando Servidor
app.listen(PORT,()=>{console.log(`[ Servidor Iniciado com Sucesso na porta ${PORT} ! ]`);});
