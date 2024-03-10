import {Project} from '../models/project'
import { RequestHandler } from "express";

const projectModel = new Project();

const list_all_projects:RequestHandler = async (req,res)=>{
    res.send(await projectModel.list())
}

const create_project:RequestHandler = async (req,res)=>{
    const {description,due_date,name,start_date,status, manager_id} = req.body;
    await projectModel.create({name,description,due_date,start_date,status, manager_id})
    res.status(201).send()
}

const update_project:RequestHandler = async (req,res)=>{
    const {project_id} = req.body
    const {description,due_date,name,start_date,status, manager_id} = req.body.project;
    await projectModel.update(project_id,{name,description,due_date,start_date,status, manager_id})
    res.status(204).send();
}


const delete_project:RequestHandler = async(req,res)=>{
    const {project_id} = req.body
    console.log(project_id)
    await projectModel.delete(project_id)
    
    res.status(204).send()
}

const assign_manager:RequestHandler = async(req,res)=>{
    const {project_id,manager_id} = req.body
    await projectModel.assign(project_id,manager_id);
    res.status(204).send();
}

export default {list_all_projects, create_project,update_project,delete_project, assign_manager}