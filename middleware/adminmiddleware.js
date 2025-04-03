const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_KEY="shubham1234";

function adminmiddleware(req,res,next){
     const creatorId=req.headers.token;

     const data=jwt.verify(creatorId,JWT_KEY);

     if(data){
          req.creatorId=data._id
          next();
     }

     
}

module.exports={
     adminmiddleware
}