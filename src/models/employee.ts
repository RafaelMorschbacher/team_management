import {randomUUID, UUID} from 'node:crypto'
export class Employee{

    #in_memory_list = new Map();

    list(){
        const all_employees = Array.from(this.#in_memory_list.entries()).map((iterable)=>{
            const id = iterable[0]
            return {id, ...iterable[1]}
        })
        return all_employees
    }

    create(employee: {name: string, monthly_salary:number ,specialty?:string}){
        this.#in_memory_list.set(randomUUID(), employee)
    }

    find(employee_id?:UUID){
        return this.#in_memory_list.get(employee_id);
    }

    update(employee_id:UUID,employee: {name: string, monthly_salary:number ,specialty?:string}){
        this.#in_memory_list.set(employee_id, employee)
    }
    
    delete(employee_id: UUID){
        this.#in_memory_list.delete(employee_id)
    }
}