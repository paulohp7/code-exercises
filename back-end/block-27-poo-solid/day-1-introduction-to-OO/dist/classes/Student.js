"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
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
exports.Student = Student;
