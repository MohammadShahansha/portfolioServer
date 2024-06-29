import express from 'express';
import { skillController } from './skill.controller';

const router = express.Router();

router.post('/skill', skillController.createSkillIntoDB);

router.get('/skills', skillController.getAllSkill);
router.put('/update-skill/:_id', skillController.updateSkill);

export const skillRouter = router;
