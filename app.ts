import { Person, Behaviour, Acts, Job, Pronouns } from "./objects";
import { Department } from "./classes"

const quan: Person = {
    name: "Quan",
    age: 26,
    address: 'France',
    role: Job.COLLEGE_STUDENT,
    behaviour: null,
    gender: 'male',
}

const armaan: Person = {
    name: 'Armaan',
    age: 16,
    address: 'Tagore Path Bijjulia',
    phoneNumber: '9304xxxxxx',
    socials: [],
    behaviour: {
        weeb: true,
        student: true,
        hobbies: [
            { name: 'Programming', level: 5 }
        ],
        nature: ['Nerd', 'Introverted']
    },
    role: Job.STUDENT,
    gender: 'male',
    pronouns: Pronouns.HE_HIM
}

const Mend = new Department("Mend - Music Bending Y'all Together!");
Mend.addEmployee(armaan);
Mend.addEmployee(quan);
console.log(Mend.employees)

