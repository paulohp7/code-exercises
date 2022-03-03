"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./classes/Student");
const student1 = new Student_1.Student(1234, 'John', [10, 10, 10, 10], [10, 10]);
console.log(`John avarage grade is: ${student1.avaregaGrades()}`);
const student2 = new Student_1.Student(4321, 'Nick', [10, 5, 9, 8], [8, 7]);
console.log(`Nick avarage grade is: ${student2.avaregaGrades()}`);
