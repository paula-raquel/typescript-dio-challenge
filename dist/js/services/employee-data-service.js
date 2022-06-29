import { Employee } from "../models/employee-model.js";
export class EmployeesDate extends Employee {
    constructor() {
        super(...arguments);
        this.dataEmployees = [];
    }
    get listEmployees() {
        return this.dataEmployees;
    }
}
