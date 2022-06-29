import { Employee } from "./employee-model.js";

export class Employees{

    private employees: Employee[] = [];

    public addEmployees(employee: Employee){
        this.employees.push(employee);
    }

    public listEmployees(): Employee[]{
        return this.employees;
    }

}