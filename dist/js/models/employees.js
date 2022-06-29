export class Employees {
    constructor() {
        this.employees = [];
    }
    addEmployees(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        return this.employees;
    }
}
