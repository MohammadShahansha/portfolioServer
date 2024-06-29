import express from 'express';
import { projectController } from './project.controller';

const router = express.Router();

router.post('/project', projectController.createProjectIntoDB);

router.get('/projects', projectController.getAllProject);
router.get('/single-project/:_id', projectController.getSingleProject);

router.put('/update-project/:_id', projectController.updateProject);
router.delete('/delete-project/:_id', projectController.deleteProject);

export const projectRouter = router;
