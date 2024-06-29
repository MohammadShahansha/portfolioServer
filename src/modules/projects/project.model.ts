import { Schema, model } from 'mongoose';
import { TProject } from './project.interface';

const projectSchema = new Schema<TProject>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  tachnologies: {
    type: String,
    required: true,
  },
  discriptions: {
    type: String,
    required: true,
  },
  frontedGithubLink: {
    type: String,
    required: true,
  },
  serverGithubLink: {
    type: String,
  },
  liveLink: {
    type: String,
    required: true,
  },
  projectPrasentationLink: {
    type: String,
  },
});

export const Project = model<TProject>('Project', projectSchema);
