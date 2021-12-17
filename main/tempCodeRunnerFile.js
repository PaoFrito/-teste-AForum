var id = req.params.id;
    threadModel.findOnde({
        where: {id: id}
    }).then(thread=>{ 
        if(thread != undefined){
            
        }else{
            res.redirect("/");
        }
    })