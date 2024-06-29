import express from 'express';
import { blogController } from './blog.controller';

const router = express.Router();

router.post('/blog', blogController.createBlogIntoDB);

router.get('/blogs', blogController.getAllBlog);
router.get('/single-blog/:_id', blogController.getSingleBlog);

router.put('/update-blog/:_id', blogController.updateBlog);
router.delete('/delete-blog/:_id', blogController.deleteBlog);

export const blogRouter = router;
