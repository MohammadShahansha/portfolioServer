import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { projectRouter } from './modules/projects/project.routes';
import { skillRouter } from './modules/skills/skill.routes';
import { blogRouter } from './modules/blog/blog.routes';
import { loginRouter } from './modules/login/login.routes';
const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());

app.use('/api', loginRouter);
app.use('/api', projectRouter);
app.use('/api', skillRouter);
app.use('/api', blogRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
export default app;
