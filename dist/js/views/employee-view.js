export class EmployeeView {
    constructor(element) {
        this.elementTableEmployees = document.querySelector(`${element}`);
    }
    template(model) {
        return `
        <table>
            <thead>
                <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Nome</th>
                </tr>    
            </thead>
            <tbody>
                ${model.listEmployees().map(employee => {
            return `
                        <tr>
                            <td scope="row">${employee.code}</td>
                             <td>${employee.name}</td>
                        </tr>
                        `;
        }).join('')}               
            </tbody>
            <tfoot>
                <th scope="row">Total Registros</th>
                <td colspan="3">${model.listEmployees().length}</td>
            </tfoot>            
        </table>
    `;
    }
    createTableEmployees(model) {
        this.elementTableEmployees.innerHTML = this.template(model);
    }
}
