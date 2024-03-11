import express, { Application, Request, Response, application } from 'express'
import { employeeRoutes } from './routes/employeeRoutes';
import {projectRoutes} from './routes/projectRoutes'
import body_parser from 'body-parser'
import { allocation_routes } from './routes/allocationRoutes';

const app:Application = express();

//CONFIGS
app.use(body_parser.json())

//REQUESTS
app.use('/employee', employeeRoutes)
app.use('/project', projectRoutes)
app.use('/allocation', allocation_routes)

//listen for requests
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});