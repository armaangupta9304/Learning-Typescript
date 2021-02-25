import { Person, Job, Gender, Pronouns, Behaviour, Acts } from "./objects";

export class Department {
    name: string;
    employees: Person[] = [];
    constructor(name: string) {
        this.name = name;
    }
    describe() {
        console.log(`[DEPARTMENT] Name: ${this.name}`)
    }
    addEmployee(employee: Person) {
        this.employees.push(employee);
    }
}