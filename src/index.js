// //require("dotenv").config({path:'./.env'});
// import connectDB from "./db/index.js";

// import dotenv from "dotenv";
// // import mongoose from "mongoose";
// // import { DB_NAME } from "./constants";
// import connectDB from "./db/index";

// dotenv.config({path:'./.env'});
// connectDB();


import express from 'express';
import dotenv from "dotenv";
import connectDB from "./db/index.js"; // <-- fixed here

const app = express();
dotenv.config({ path: './.env' });

connectDB()
.then(() =>{
     app.listen(process.env.PORT || 3000, () => {    
        console.log(`Server is running on port ${process.env.PORT}`);
     }
     );   
})

.catch((error) => {
    console.error("Connection failed MongoDB:", error);
    process.exit(1); // Exit the process with failure
});










/*
import express from "express";
const app = express();


(async() => {
     try{
         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
         app.on("error", (error)=>{
          console.log("Error connecting to MongoDB:", error);
         })

         app.listen(process.env.PORT, () => {
          console.log(`Server is running on port ${process.env.PORT}`);
          });

          
     }catch(error){
          console.error("Error connecting to MongoDB:", error);
          throw error;
     }
})()

*/