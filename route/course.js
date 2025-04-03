 
const express=require("express");




const app=express();

const { courseModel } = require("../db");
const {adminmiddleware}=require("../middleware/adminmiddleware");


const {Router}=require("express");
const course=Router();


// course.use(express.json());


course.post("/creation",adminmiddleware,async function(req,res){
  const creatorId=req.creatorId;
  const image=req.body.url;
  const description=req.body.description;
  const price=req.body.price;

  await courseModel.create({
    creatorId: creatorId,
        image:image,
        description:description,
        price:price
  });

  res.json({
     message:"sinup",
     cour
  })
}); 

course.post("/preview",async function(req,res){
     const course= await courseModel.find({});
    

     const allCourseIds = course.map(course => course._id);

  res.json({
    course,
    courseIds: allCourseIds  // Send the list of all course IDs
  });
})


module.exports={
    course:course
}


  