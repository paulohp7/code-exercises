"use strict";
class Student {
    constructor(enrollment, name, tests, projects) {
        this._enrollment = enrollment;
        this._name = name;
        this._tests = tests;
        this._projects = projects;
    }
    sumGrades() {
        const testsSum = this._tests.reduce((partialSum, a) => partialSum + a, 0);
        const projectsSum = this._projects.reduce((partialSum, a) => partialSum + a, 0);
        return testsSum + projectsSum;
    }
    avaregaGrades() {
        const TOTAL_GRADES = 6;
        const avarage = this.sumGrades() / TOTAL_GRADES;
        return Number(avarage.toFixed(2));
    }
}
const student1 = new Student(1234, 'John', [10, 10, 10, 10], [10, 10]);
console.log(`John avarage grade is: ${student1.avaregaGrades()}`);
const student2 = new Student(4321, 'Nick', [10, 5, 9, 8], [8, 7]);
console.log(`Nick avarage grade is: ${student2.avaregaGrades()}`);
