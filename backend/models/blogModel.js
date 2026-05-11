import mongoose from 'mongoose';
const Schema =  mongoose.Schema;
const blogSchema =  new Schema({
    blogContent : {type:mongoose.Schema.Types.Mixed, required:true},
    title       : {type:String, required:false},
    tags        : {type:[String]},
},{timestamps:true});

export default mongoose.model('AssetElixirBlog', blogSchema)