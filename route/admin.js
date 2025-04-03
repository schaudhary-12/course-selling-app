const { Router }=require("express");

const admin=Router();

// admin.use(express.json());
const jwt=require("jsonwebtoken");
const JWT_KEY="shubham1234";

const { adminModel}=require("../db");
const {adminmiddleware}=require("../middleware/adminmiddleware");

admin.post("/signup",async function(req,res){
    const username=req.body.name;
    const email=req.body.email;
    const password=req.body.password;

    await adminModel.create({
          name:username,
          email:email,
          password:password
    });

    res.json({
       message:"sinup"
    })
});


admin.post("/signin",async function(req,res){
  const email=req.body.email;
  const password=req.body.password;

  const userdata=await adminModel.findOne({
       email:email,
       password:password
  });

  if(!userdata){
    return res.status(401).json({ message: "Invalid email or password" });
  }

  const token=jwt.sign({
    id:userdata._id
},JWT_KEY);

  res.send({
      token:token
  });

     
});



module.exports={
    admin:admin
}


