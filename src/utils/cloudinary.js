import {v2 as cloudinary} from "cloudinary";

import fs from "fs";


cloudinary.config({ 
     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
     api_key: process.env.CLOUDINARY_API_KEY , 
     api_secret: process.env.CLOUDINARY_API_SECRET,
});


const uploadOnCloudinary = async (localFilePath) => {
     try{
          if(!localFilePath) return null
          //upload file to cloudinary
          const response = await cloudinary.uploader.upload(localFilePath, {
               resource_type: "auto",
              
          })
          console.log("File uploaded to cloudinary", response.url)
          return response;



     }catch(error){
          fs.unlink(localFilePath)
          return null;
     }

}
export default uploadOnCloudinary;

// cloudinary.v2.uploader
// .upload("dog.mp4", {
//   resource_type: "video", 
//   public_id: "my_dog",
//   overwrite: true, 
//   notification_url: "https://mysite.example.com/notify_endpoint"})
// .then(result=>console.log(result));