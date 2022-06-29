import { Employees } from "../models/employees.js";

export class EmployeeView{

    protected elementTableEmployees: HTMLElement;

    constructor(element :string){
        this.elementTableEmployees = document.querySelector(`${element}`) as HTMLElement;   
    }


    public template(model: Employees): string {
    return `
        <table>
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                </tr>    
            </thead>
            <tbody>
                ${model.listEmployees().map(
                    employee => {
                        return `
                        <tr>
                            <td scope="row">${employee.code}</td>
                             <td>${employee.name}</td>
                        </tr>
                        `;
                    }).join('')
                }               
            </tbody>
            <tfoot>
                <th scope="row">Total Registros</th>
                <td colspan="3">${model.listEmployees().length}</td>
            </tfoot>            
        </table>
    `;
    }

    public createTableEmployees(model: Employees ){
        this.elementTableEmployees.innerHTML = this.template(model);
    
    }


}