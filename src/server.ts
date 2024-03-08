import express, { Application, Request, Response, application } from 'express'
import {UUID} from 'node:crypto'
import { Employee } from './models/employee';
import {EmployeeController} from './controllers/employeeController'
import body_parser from 'body-parser'
const app:Application = express();


//MODELS and CONTROLLERS
const employeeModel = new Employee();
const employeeController = new EmployeeController()

//CONFIGS
app.use(body_parser.json())

//REQUESTS
app.get('/employee', employeeController.list_all_employees);

app.post('/employee', employeeController.create_employee);

app.get('/employee/:id', employeeController.search_employee)

app.delete('/employee', employeeController.delete_employee)

app.put('/employee', employeeController.update_employee)

//listen for requests
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});