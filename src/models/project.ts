import {sql} from '../postgres'

interface ProjectData {
    name:string, 
    description: string,
    start_date: Date , 
    due_date:number ,
    status: string,
    manager_id?: string
    };

export class Project{
    async list(){
        return await sql`SELECT * FROM projects`
    }

    async create(project:ProjectData){
        const {description,due_date,name,start_date,status, manager_id} = project 
        await sql `INSERT INTO projects (name, description, start_date, due_date, status, manager_id)
                            VALUES (${name}, ${description}, ${start_date}, ${due_date}, ${status}, ${manager_id?? null});`
    }

    async find(project_id:string){
        return await sql`SELECT * FROM projects WHERE project_id = ${project_id}`
    }

    async update(project_id:string, project: ProjectData){
        const {description,due_date,name,start_date,status} = project
        await sql`UPDATE projects
                    SET name = ${name},	description = ${description},	start_date = ${start_date},	due_date = ${due_date},	status = ${status},	manager_id = ${project.manager_id?? null}
                    WHERE project_id = ${project_id}`
    }

    async delete(project_id:string){
        await sql`DELETE FROM projects WHERE project_id = ${project_id}`
    }

    async assign(project_id:string, manager_id:string){
        await sql`UPDATE projects SET manager_id = ${manager_id} WHERE project_id = ${project_id}`
    }
}