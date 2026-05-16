import mongoose from 'mongoose';
const Schema =  mongoose.Schema;
const blogSchema =  new Schema({
    blogContent : {type:mongoose.Schema.Types.Mixed, required:true},
    title       : {type:String, required:true},
    tags        : {type:[String]},
    blogPic     : {type:String, required:false}
},{timestamps:true});

export default mongoose.model('AssetElixirBlog', blogSchema)