import express from 'express'
import employeeController from '../controllers/employeeController'

export const employeeRoutes = express.Router()

employeeRoutes.get('/', employeeController.list_all_employees);
employeeRoutes.post('/', employeeController.create_employee);
employeeRoutes.get('/:id', employeeController.search_employee)
employeeRoutes.delete('/', employeeController.delete_employee)
employeeRoutes.put('/', employeeController.update_employee)
