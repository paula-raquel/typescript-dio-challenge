import { EmployeeController } from "./controllers/employee-controller.js";
import { Employees } from "./models/employees.js";

/* Element HTML Scroll e Nav Fixed*/
var divNavBtn = document.querySelector('.scroll') as HTMLDivElement;
var container = document.querySelector('.container') as HTMLDivElement

window.addEventListener('scroll',()=>{

    if(window.innerWidth > 1 ){
        if (window.scrollY >= 150){
            divNavBtn.style.display="block";
            container.style.position="fixed"
        }else{
            divNavBtn.style.display="none";
            container.style.position="initial"
        }
    }
});

let challengeOne = new EmployeeController().popularDataEmployees();
