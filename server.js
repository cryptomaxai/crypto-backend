const express = require("express");

const app = express();

app.use(express.json());

let users = {};

app.post("/register",(req,res)=>{

let {userId} = req.body;

if(!users[userId]){

users[userId] = {
balance:0,
referrals:0
};

}

res.json(users[userId]);

});

app.post("/claim",(req,res)=>{

let {userId} = req.body;

users[userId].balance += 2;

res.json(users[userId]);

});

app.listen(3000,()=>console.log("server running"));
