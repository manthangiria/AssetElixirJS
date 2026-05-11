import express from 'express';

import { getBlog, getBlogs, createBlog, delBlog, patchBlog } from '../controllers/blogControllers.js';

const router = express.Router();

router.get('/',getBlogs);
router.get('/:id',getBlog);
router.post('/',createBlog);
router.delete('/:id',delBlog);
router.patch('/:id',patchBlog);

export default router;