
export class Employee{

    constructor(
        private _code: number,
        private _name: string
        ) {}

    get code (){
        return this._code
    }
  
    get name (){
        return this._name
    }

    public addEmployee (code: number, name: string){
        return new Employee(code, name)
    }

}