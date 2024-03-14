const express = require ("express");

const app = express ();

app.use(express.json());


app.get("/", function(req, res){
    res.send("Ola");
});

app.post("/", function(req, res){
    console.log(req.body);
    res.status(201).send("Criado com sucesso");
});

app.put("/", function(req, res){
    res.json({status: "200", message: "sucesso"});
});

app.delete("/", function(req, res){
   res.status(204).end();
});

 app.use(function(error, req, res, next){
    res.status(400).send("Deu ruim!");s 
 })


app.listen(3000, function(){
    console.log("API está ON!");
});

module.exports = app;