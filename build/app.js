"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var objects_1 = require("./objects");
var classes_1 = require("./classes");
var quan = {
    name: "Quan",
    age: 26,
    address: 'France',
    role: objects_1.Job.COLLEGE_STUDENT,
    behaviour: null,
    gender: 'male',
};
var armaan = {
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
    role: objects_1.Job.STUDENT,
    gender: 'male',
    pronouns: objects_1.Pronouns.HE_HIM
};
var Mend = new classes_1.Department("Mend - Music Bending Y'all Together!");
Mend.addEmployee(armaan);
Mend.addEmployee(quan);
console.log(Mend.employees);
