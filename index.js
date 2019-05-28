const express=require("express");
const bodyParser=require("body-parser");
const loger=require("morgan");
const session=require("express-session")


const server= express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());
server.use(loger('tiny'));

server.use(session({
    secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

server.get('/user', function(req, res) {
    if (req.session.views) {
      req.session.views++
      res.json({views:req.session.views})
    } else {
      req.session.views = 1
      res.send('welcome to the session demo. refresh!')
    }
  })


server.get("/login",(req,res)=>{
    console.log(req.query)
    res.json(req.query);
})
server.get("/demo/:name/:age/:city",(req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.json(req.params);
    res.json(req.query);
})

server.use(express.static('public'));

server.listen(8080,()=>{
    console.log("server started")
})
 