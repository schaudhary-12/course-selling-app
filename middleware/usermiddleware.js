const express=require("express");
const jwt=require("jsonwebtoken");
const JWT_KEY="shubham123";

function usermiddleware(req,res,next){
     const userId=req.headers.token;

     const data=jwt.verify(userId,JWT_KEY);

     if(data){
          req.userId=data._id
          next();
     }

     
}

module.exports={
     usermiddleware
}