import { Employee } from "./models/employee-model.js";
var divNavBtn = document.querySelector('.scroll');
var container = document.querySelector('.container');
window.addEventListener('scroll', () => {
    if (window.innerWidth > 1) {
        if (window.scrollY >= 150) {
            divNavBtn.style.display = "block";
            container.style.position = "fixed";
        }
        else {
            divNavBtn.style.display = "none";
            container.style.position = "initial";
        }
    }
});
let employeeData = [
    {
        code: 1,
        name: "Paula"
    },
    {
        code: 2,
        name: "Raquel"
    }
];
console.log(employeeData);
let test = new Employee(3, "Vitor");
console.log(test);
