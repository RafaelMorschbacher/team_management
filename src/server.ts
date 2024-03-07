import express from 'express'
import { Employee } from './models/employee';
import body_parser from 'body-parser'
const app = express();


//MODELS
const employeeModel = new Employee();

//CONFIGS
app.use(body_parser.json())

//REQUESTS
app.get('/', (req,res)=>{
    return res.send(employeeModel.list())
});

app.post('/employee', (req,res)=>{
    const {name, monthly_salary ,specialty} = req.body  
    employeeModel.create({name, monthly_salary, specialty})
    res.send(employeeModel.list())
});

app.delete('/employee', (req,res)=>{
    const {employee_id} = req.body  
    employeeModel.delete(employee_id)
    res.send(employeeModel.list())
})

app.put('/employee', (req,res)=>{
    const {employee_id, name, monthly_salary ,specialty} = req.body  
    employeeModel.update(employee_id, {name, monthly_salary, specialty})
    res.send(employeeModel.list())
})

//listen for requests
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});