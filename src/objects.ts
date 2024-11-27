// Typescript Object

import { log } from "console";

//let employees: object;

let employees: {
    firstName: string,
    lastName: string,
    age: number,
    department: string,
    hobbies: string[]
};

employees = {
    firstName: 'Blessings',
    lastName: 'James',
    age: 35,
    department: 'IT',
    hobbies: ['reading', 'swimming']
}

console.log(employees);
