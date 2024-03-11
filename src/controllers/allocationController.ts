import { RequestHandler } from 'express';
import {Allocation} from '../models/allocation'


const allocationModel = new Allocation();


const list_all_allocations:RequestHandler = async (req,res)=>{
    res.send(await allocationModel.list())
}

const delete_allocation:RequestHandler = async (req,res) =>{
    const {employee_id, project_id} = req.body;
    await allocationModel.delete(project_id, employee_id);
    res.status(204).send();
}

const create_allocation:RequestHandler = async (req,res)=>{
    const {project_id, employee_id, role, start_date, end_date} = req.body
    await allocationModel.create({project_id, employee_id, role, start_date, end_date});
    res.status(201).send()
}

export default {list_all_allocations, delete_allocation, create_allocation}