// const { Router }=require("express");

// const user=Router();

// const jwt=require("jsonwebtoken");
// const JWT_KEY="shubham123";

// // const user=express();
// const { userModel,courseModel, purchaseModel}=require("../db");
// const {usermiddleware}=require("../middleware/usermiddleware");

// // user.use(express.json());


// user.post("/signup",async function(req,res){
//       const username=req.body.name;
//       const email=req.body.email;
//       const password=req.body.password;

//       await userModel.create({
//             name:username,
//             email:email,
//             password:password
//       });

//       res.json({
//          message:"sinup"
//       })
// });


// user.post("/signin",async function(req,res){
//     const email=req.body.email;
//     const password=req.body.password;

//     const userdata=await userModel.findOne({
//          email:email,
//          password:password
//     });

//     if(userdata){
//          const token=jwt.sign({
//                 id:userdata._id
//          },JWT_KEY);
//     }

//     res.send({
//         token:token
//     });

       
// });


// user.post("/purchase",usermiddleware,async function(req,res){
//       const userid=req.userid;
//        const courseid=req.body.courseid;

//        await purchaseModel.create({
//           userid:userid,
//           courseid:courseid
//        });

//     //    res.send({
//     //       courseid
//     //    });


      


// });

// user.post("/coursecontent", async function(req,res){
//         const userid=req.body.userid;

//         const purchases= await purchaseModel.find({
//             userid
//         })
//      let usersbought=[];
//      for(let i=0;i<purchases.length;i++){
//            if(purchases[i].userid){
//                usersbought.push(purchases[i].courseid);
//            }
//      }


//      const coursesData = await courseModel.find({
//         _id: { $in: usersbought }
//     })

//     res.json({
//         purchases,
//         coursesData
//     })
// });


// module.exports={
//       user:user
// }

const { Router } = require("express");
const jwt = require("jsonwebtoken");

const user = Router();
const JWT_KEY = "shubham123";

const { userModel, courseModel, purchaseModel } = require("../db");
const { usermiddleware } = require("../middleware/usermiddleware");

user.post("/signup", async function(req, res) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    await userModel.create({
        name: username,
        email: email,
        password: password
    });

    res.json({ message: "Signup successful" });
});

user.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const userdata = await userModel.findOne({
        email: email,
        password: password
    });

    if (!userdata) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: userdata._id }, JWT_KEY);
    res.send({ token });
});

user.post("/purchase", usermiddleware, async function(req, res) {
    const userId = req.userId;
    const courseId = req.body.courseId;

    await purchaseModel.create({ userId, courseId });

    res.json({ message: "Purchase successful" });
});

user.post("/coursecontent", usermiddleware,async function(req, res) {
    const userId = req.userId;

    const purchases = await purchaseModel.find({ userId });

    let usersbought = [];
    for (let i = 0; i < purchases.length; i++) {
        if (purchases[i].userId) {
            usersbought.push(purchases[i]. courseId);
        }
    }

    const coursesData = await courseModel.find({
        _id: { $in: usersbought }
    });

    res.json({ purchases, coursesData });
});

module.exports = { user };
