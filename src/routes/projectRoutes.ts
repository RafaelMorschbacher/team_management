import express from 'express'
import {Project} from '../models/project'

export const projectRoutes = express.Router()

const projectModel = new Project();

projectRoutes.get('/', async (req,res)=>{
    res.send(await projectModel.list())
});

projectRoutes.post('/', async (req,res)=>{
    const {description,due_date,name,start_date,status, manager_id} = req.body;
    await projectModel.create({name,description,due_date,start_date,status, manager_id})
    res.status(201).send()
});

projectRoutes.put('/', async (req,res)=>{
    const {project_id} = req.body
    const {description,due_date,name,start_date,status, manager_id} = req.body.project;
    await projectModel.update(project_id,{name,description,due_date,start_date,status, manager_id})
    return res.status(204).send();
});

