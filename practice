const express= require("express");

const server= express();

console.log("Hello");

server.get("/login", (req,res)=>{
console.log(req.query);
res.send(req.query)
})

server.get("/demo/:name/:subject", (req,res)=>{
    console.log(req.params);
    res.json(req.params)
    })


server.listen(8080,()=>{
    console.log("started server");
});
