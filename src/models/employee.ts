import {sql} from '../postgres'

interface EmployeeData {
    last_name:string, 
    first_name: string,
    birth_year: number , 
    monthly_salary:number ,
    seniority: string,
    specialty:string,
    };

export class Employee{

    async list(){
        return await sql`SELECT * FROM employees`
    }

    async create(employee: EmployeeData){

        const {first_name, last_name, birth_year, monthly_salary, seniority, specialty} = employee
        await sql`INSERT INTO employees (first_name, last_name, birth_year, monthly_salary, specialty, seniority)
                            VALUES (${first_name}, ${last_name}, ${birth_year}, ${monthly_salary}, ${specialty}, ${seniority});`
    }

    async find(employee_id:string){
        const employee_data = await sql`SELECT * FROM employees WHERE employee_id = ${employee_id} LIMIT 1`
        //const allocated_projects = await sql`SELECT * FROM project_allocations WHERE employee_id = ${employee_id}`
        const allocated_projects = await sql`SELECT  p.project_id, p.name, p.description, a.role, a.start_date, a.end_date
                                            FROM project_allocations a
                                                JOIN projects p ON p.project_id = a.project_id
                                                WHERE employee_id = ${employee_id}`

        return {employee_data: employee_data[0], allocated_projects}
    }

    async update(employee_id:string, employee:EmployeeData){
        const {birth_year, first_name, last_name, monthly_salary, seniority, specialty} = employee
        await sql`UPDATE employees SET first_name = ${first_name}, last_name= ${last_name}, birth_year= ${birth_year}, monthly_salary= ${monthly_salary}, specialty= ${specialty}, seniority= ${seniority}
                    WHERE employee_id = ${employee_id}`
    }
    
    async delete(employee_id: string){
        return await sql`DELETE FROM employees WHERE employee_id = ${employee_id}`
    }
}