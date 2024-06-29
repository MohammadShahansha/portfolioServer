import { TProject } from './project.interface';
import { Project } from './project.model';

const createProjectIntoDB = async (project: TProject) => {
  const result = await Project.create(project);
  return result;
};

const getAllProject = async () => {
  const result = await Project.find();
  return result;
};

const getSingleProject = async (_id: string) => {
  const result = await Project.findById({ _id });
  return result;
};

const updateProject = async (_id: string, projectData: TProject) => {
  const result = await Project.findByIdAndUpdate({ _id }, projectData, {
    new: true,
    runValidators: true,
  });
  return result;
};
const deleteProject = async (_id: string) => {
  const result = await Project.deleteOne({ _id });
  return result;
};

export const projectServices = {
  createProjectIntoDB,
  getAllProject,
  getSingleProject,
  updateProject,
  deleteProject,
};
