import { TSkill } from './skill.interface';
import { Skill } from './skill.model';

const createSkillIntoDB = async (skill: TSkill) => {
  const result = await Skill.create(skill);
  return result;
};

const getAllSkill = async () => {
  const result = await Skill.find();
  return result;
};

const updateSkill = async (_id: string, skillsData: TSkill) => {
  const result = await Skill.findByIdAndUpdate({ _id }, skillsData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteSkill = async (_id: string) => {
  const result = await Skill.deleteOne({ _id });
  return result;
};

export const skillServices = {
  createSkillIntoDB,
  getAllSkill,
  updateSkill,
  deleteSkill,
};
