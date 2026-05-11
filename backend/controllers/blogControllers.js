import Blog from '../models/blogModel.js';
import mongoose from 'mongoose';

const getBlogs = async (req, res) => {
    const all_blogs = await Blog.find().sort({createdAt:-1});
    res.status(200).json(all_blogs);
};

const getBlog = async (req,res) => {
    const {id}   = req.params;
    const a_note = await Blog.findById(id);
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    if (!a_note){
        return res.status(404).json({error:"No Matching Blog Found"});
    }
    res.status(200).json(a_note);
};

const createBlog = async (req,res) => {
    const {blogContent, title, tags} = req.body;
    try{
        const new_blog = await Note.create({title, blogContent, tags});
        res.status(200).json(new_blog);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const delBlog = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The Blog ID is invalid!"});
    }
    const blog_to_del = await Blog.findOneAndDelete({_id:id});
    if (!blog_to_del){
        return res.status(404).json({error:"No matching Blog found to delete"});
    }
    res.status(200).json(blog_to_del);
};

const patchBlog = async (req, res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is invalid"});
    }
    const blog_to_patch = await Blog.findOneAndUpdate({_id:id},{...req.body});
    if (!blog_to_patch){
        return res.status(404).json({error:"No matching blog found to patch!"})
    }
    res.status(200).json(blog_to_patch);
};

export {getBlogs, getBlog, createBlog, delBlog, patchBlog};