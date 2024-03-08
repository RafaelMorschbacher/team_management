import express, { Application, Request, Response, application } from 'express'
import { employeeRoutes } from './routes/employeeRoutes';
import body_parser from 'body-parser'

const app:Application = express();

//CONFIGS
app.use(body_parser.json())

//REQUESTS
app.use('/employee', employeeRoutes)

//listen for requests
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});