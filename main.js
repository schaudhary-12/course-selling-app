
const express=require("express");
const app=express();
app.use(express.json());
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://schaudhary12:shubham14920@cluster0.q0w6s.mongodb.net/todo-12");

const { user}=require("./route/user");
const {admin}=require("./route/admin");

const {course}=require("./route/course");

app.use("/api/v1/u",user);
app.use("/api/v1/a",admin);
app.use("/api/v1/c",course);

app.listen(8000);




