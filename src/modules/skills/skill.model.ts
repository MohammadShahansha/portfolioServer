import { Schema, model } from 'mongoose';
import { TSkill } from './skill.interface';

const skillsSchema = new Schema<TSkill>({
  skillName: {
    type: String,
    required: true,
  },
  percentage: {
    type: String,
    required: true,
  },
});

export const Skill = model<TSkill>('SKill', skillsSchema);
