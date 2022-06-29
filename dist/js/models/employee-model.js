export class Employee {
    constructor(_code, _name) {
        this._code = _code;
        this._name = _name;
    }
    get code() {
        return this._code;
    }
    get name() {
        return this._name;
    }
    addEmployee(code, name) {
        return new Employee(code, name);
    }
}
