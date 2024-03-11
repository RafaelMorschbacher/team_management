import express from 'express'
import {Project} from '../models/project'
import projectController from '../controllers/projectController'
import allocationController from '../controllers/allocationController'

export const allocation_routes = express.Router()

allocation_routes.get('/', allocationController.list_all_allocations)
allocation_routes.delete('/', allocationController.delete_allocation)
allocation_routes.post('/', allocationController.create_allocation)