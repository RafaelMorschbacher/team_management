import express, { Application, Request, Response, application } from 'express'
import {UUID} from 'node:crypto'
import { Employee } from './models/employee';
import body_parser from 'body-parser'
const app:Application = express();


//MODELS
const employeeModel = new Employee();

//CONFIGS
app.use(body_parser.json())

//REQUESTS
app.get('/', async (req:Request,res:Response)=>{
    return res.send(await employeeModel.list())
});

app.post('/employee', async(req:Request,res:Response)=>{
    const {first_name, last_name, birth_year, monthly_salary, seniority, specialty} = req.body ; 
    await employeeModel.create({first_name, last_name, birth_year, monthly_salary, seniority, specialty});
    return res.status(201).send();
});

app.get('/employee/:id', async(req:Request,res:Response)=>{
    const employee_id = req.params.id;
    return res.send(await employeeModel.find(employee_id))
})

app.delete('/employee', (req,res)=>{
    const {employee_id} = req.body  
    employeeModel.delete(employee_id)
    res.status(204).send()
})

app.put('/employee', async (req,res)=>{
    const employee_id = req.body.employee_id
    const employee = req.body.employee; 
    await employeeModel.update(employee_id,employee)
    return res.status(204).send();
})

//listen for requests
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});