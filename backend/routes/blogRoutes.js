import express from 'express';

import { getBlog, getBlogs, createBlog, delBlog, patchBlog } from '../controllers/blogControllers.js';

import requireAuth from '../middleware/requireAuth.js';
import cloudinary from 'cloudinary';

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
    
});
router.delete('/:id',delBlog);
router.patch('/:id',patchBlog);

export default router;