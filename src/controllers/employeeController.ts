import { RequestHandler } from "express";
import {Employee} from '../models/employee'

export class EmployeeController{

    employeeModel = new Employee()

    list_all_employees:RequestHandler = async (req,res)=>{
        return res.send(await this.employeeModel.list())
    }

    create_employee:RequestHandler = async(req,res)=>{
        const {first_name, last_name, birth_year, monthly_salary, seniority, specialty} = req.body ; 
        await this.employeeModel.create({first_name, last_name, birth_year, monthly_salary, seniority, specialty});
        return res.status(201).send();
    }

    search_employee:RequestHandler = async(req,res)=>{
        const employee_id = req.params.id;
        return res.send(await this.employeeModel.find(employee_id))
    }

    delete_employee:RequestHandler = async (req,res)=>{
        const {employee_id} = req.body  
        await this.employeeModel.delete(employee_id)
        res.status(204).send()
    }

    update_employee:RequestHandler = async (req,res)=>{
        const employee_id = req.body.employee_id
        const employee = req.body.employee; 
        await this.employeeModel.update(employee_id,employee)
        return res.status(204).send();
    }
}

    
