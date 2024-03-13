import { RequestHandler } from "express";
import {Employee} from '../models/employee'

    const employeeModel = new Employee()

    const list_all_employees:RequestHandler = async (req,res)=>{
        return res.status(200).send(await employeeModel.list())
    }

    const create_employee:RequestHandler = async(req,res)=>{
        const {first_name, last_name, birth_year, monthly_salary, seniority, specialty} = req.body ; 
        await employeeModel.create({first_name, last_name, birth_year, monthly_salary, seniority, specialty});
        return res.status(201).send({message: "Employee sucessfully created"});
    }

    const search_employee:RequestHandler = async(req,res)=>{
        const employee_id = req.params.id;
        return res.status(200).send(await employeeModel.find(employee_id))
    }

    const delete_employee:RequestHandler = async (req,res)=>{
        const {employee_id} = req.body  
        await employeeModel.delete(employee_id)
        res.status(200).send({message: "Employee sucessfully deleted"})
    }

    const update_employee:RequestHandler = async (req,res)=>{
        const employee_id = req.body.employee_id
        const employee = req.body.employee; 
        await employeeModel.update(employee_id,employee)
        return res.status(200).send({message: "Employee sucessfully updated"});
    }

    export default {list_all_employees,create_employee,search_employee, delete_employee, update_employee}
    
