import express, { Application, Request, Response, application } from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './swagger.json'
import { employeeRoutes } from './routes/employeeRoutes';
import {projectRoutes} from './routes/projectRoutes'
import body_parser from 'body-parser'
import { allocation_routes } from './routes/allocationRoutes';


const app:Application = express();

//CONFIGS
app.use(body_parser.json())

//Routes
app.use('/employee', employeeRoutes)
app.use('/project', projectRoutes)
app.use('/allocation', allocation_routes)

app.get('/', (req, res) => {
  res.redirect('/api-docs')
 });

// Documentation with swaggrer
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

//listen for requests
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});