import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


// Video Schema
const videoSchema = new Schema({
     videoFile: {
         type: String, // URL to the video
         required: true
     },
     thumbnail: {
         type: String, // URL to the thumbnail
         required: true
     },
     owner: {
         type: Schema.Types.ObjectId,
         ref: 'User',
         required: true
     },
     title: {
         type: String,
         required: true,
         trim: true
     },
     description: {
         type: String,
         trim: true
     },
     duration: {
         type: Number, // in seconds
         required: true
     },
     views: {
         type: Number,
         default: 0
     },
     isPublished: {
         type: Boolean,
         default: true
     }
 }, { timestamps: true });


videoSchema.plugin(mongooseAggregatePaginate); 

export const Video = mongoose.model("Video", videoSchema);
export default Video;
