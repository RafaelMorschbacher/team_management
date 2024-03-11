import {sql} from '../postgres'

interface AllocationData {
    employee_id: string,
    project_id: string,
    role: string,
    start_date: Date,
    end_date: Date
}

export class Allocation{

    async list(){
        return await sql`SELECT * FROM project_allocations`
    }


    async create(allocation: AllocationData){
        const {employee_id,project_id, role, start_date, end_date} = allocation
        await sql`INSERT INTO project_allocations(project_id, employee_id, role, start_date, end_date)
                VALUES(${project_id},${employee_id},${role},${start_date},${end_date})`
    }   

    async find(employee_id?:string, project_id?: string){
        if(employee_id && project_id)
            return await sql`SELECT * FROM project_allocations WHERE employee_id = ${employee_id} AND project_id = ${project_id}`;
        if(employee_id) return await sql`SELECT * FROM project_allocations WHERE employee_id = ${employee_id}`;
        if(project_id) return await sql`SELECT * FROM project_allocations WHERE project_id = ${project_id}`;
    }

    async delete(project_id:string, employee_id: string){
        return await sql`DELETE FROM project_allocations WHERE employee_id = ${employee_id} AND project_id = ${project_id}`
    }
    
}
