import { Employee } from "../models/employee-model.js";
import { Employees } from "../models/employees.js";
import { EmployeeView } from "../views/employee-view.js";
export class EmployeeController {
    constructor() {
        this.employeesDate = new Employees();
        this.templateTable = new EmployeeView('.table__challenge1');
    }
    popularDataEmployees() {
        for (let index = 0; index < dataEmployees.length; index++) {
            let employee = new Employee(dataEmployees[index].code, dataEmployees[index].name);
            this.employeesDate.addEmployees(employee);
        }
        this.templateTable.createTableEmployees(this.employeesDate);
    }
}
let dataEmployees = [
    {
        code: 1,
        name: "Pratik Skaggs"
    },
    {
        code: 2,
        name: "Uehudah Hack"
    },
    {
        code: 3,
        name: "Edison Drye"
    },
    {
        code: 4,
        name: "Mihoko Scholl"
    },
    {
        code: 5,
        name: "Ajani Harding"
    },
    {
        code: 6,
        name: "Ruthie Coco"
    },
    {
        code: 7,
        name: "Orazio Hart"
    }
];
