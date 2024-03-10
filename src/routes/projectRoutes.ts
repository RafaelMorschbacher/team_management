import express from 'express'
import {Project} from '../models/project'
import projectController from '../controllers/projectController'

export const projectRoutes = express.Router()

const projectModel = new Project();

projectRoutes.get('/', projectController.list_all_projects);
projectRoutes.post('/', projectController.create_project);
projectRoutes.put('/', projectController.update_project);
projectRoutes.delete('/', projectController.delete_project)

