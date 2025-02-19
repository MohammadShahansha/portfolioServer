import express from 'express';
import { loginController } from './login.controller';
const router = express.Router();

router.post('/login', loginController.createLogin);

export const loginRouter = router;
