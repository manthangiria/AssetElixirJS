import express from 'express';

import { getBlog, getBlogs, createBlog, delBlog, patchBlog } from '../controllers/blogControllers.js';

import requireAuth from '../middleware/requireAuth.js';
import {v2 as cloudinary} from 'cloudinary';

import Blog from '../models/blogModel.js';

import fs from 'fs';
import multer from 'multer';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, 'uploads');

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

cloudinary.config({
    cloud_name : "dt0zcc0ec",
    api_key:'363287392839592',
    api_secret:process.env.API_SEC
});

const storage = multer.diskStorage(
    {
        destination:function(req, file, cb){cb(null, uploadDir)},
        filename: function(req, file, cb){cb(null, `${Date.now()}-${file.originalname}`)}
    }
)

const upload = multer({storage:storage});

const router = express.Router();


router.get('/',getBlogs);

router.get('/:id',getBlog);

router.use(requireAuth);

router.post('/',(req,res,next)=>{
    upload.single('blog_pic')(req,res, (err)=>{
        if (err) {
            console.log("Multer Error: ",err);
            return res.status(400).json({error:err.message});
        }
        console.log("File Uploaded: ", req.file);
        next();
    })
},async (req,res) => {
    try {
        if (!req.file){
            return res.status(400).json({error:"No File Uploaded"});
        }
        console.log("File recieved: ", req.file.path);
        const uploadResult = await cloudinary.uploader.upload(req.file.path);
        fs.unlinkSync(req.file.path);
        try{
            const user_id = req.user._id;
            const new_blog = await Blog.create({blogContent:req.body.blogContent, title:req.body.title, tags:req.body.tags, blogPic:uploadResult.secure_url});
            res.status(200).json(new_blog)
        } catch (err) {
            res.status(404).json({error:`${err.message}`});
        }
    } catch (err) {
        console.log('Upload Error : ', err);
        res.status(500).json({error:"Upload Failed!"});
    }
});

router.delete('/:id',delBlog);

router.patch('/:id',patchBlog);

export default router;