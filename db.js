// const mongoose=require("mongoose")
// const Schema=mongoose.Schema;
// const objectid=Schema.objectid;

// const user=new Schema({
//         name:string,
//         email:{type:string,unique:true},
//         password:string
// });

// const admin=new Schema({
//          name:string,
//          email:{type:string,unique:true},
//          password:string
// });



// const course=new Schema({
//        creatorid:creatorid,
//         image:url,
//         desciption:string,
//         price:string
// });


// const purchase=new Schema({
//        userid:userid,
//        courseid:courseid
// })






// const userModel=mongoose.model('users',user);
// const adminModel=mongoose.model('admins',admin);
// const courseModel=mongoose.model('mycourses',mycourse);
// const purchaseModel=mongoose.model('purchases',purchase);

// module.exports={
//         userModel,
//         adminModel,
//         courseModel,
//         purchaseModel

// }

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const user = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const admin = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String
});

const course = new Schema({
    creatorId:  ObjectId, // Reference to admin
    image: String,
    description: String,
    price: Number
});

const purchase = new Schema({
    userId:  ObjectId, // Reference to user
    courseId:  ObjectId// Reference to course
});

const userModel = mongoose.model("users", user);
const adminModel = mongoose.model("admins", admin);
const courseModel = mongoose.model("courses", course);
const purchaseModel = mongoose.model("purchases", purchase);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};
