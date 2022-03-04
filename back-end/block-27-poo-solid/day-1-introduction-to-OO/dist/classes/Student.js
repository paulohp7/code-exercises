"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    constructor(enrollment, name) {
        this._enrollment = enrollment;
        this._name = name;
        this._tests = [];
        this._projects = [];
    }
    get enrollment() {
        return this._enrollment;
    }
    get name() {
        return this._name;
    }
    set tests(grades) {
        if (grades.length > 4) {
            throw new Error('The student can only have 4 test grades.');
        }
        this._tests = grades;
    }
    get tests() {
        return this._tests;
    }
    set projects(grades) {
        if (grades.length > 2) {
            throw new Error('The student can only have 2 project grades.');
        }
        this._projects = grades;
    }
    get projects() {
        return this._projects;
    }
    sumGrades() {
        const testsSum = this._tests.reduce((partialSum, a) => partialSum + a, 0);
        const projectsSum = this._projects.reduce((partialSum, a) => partialSum + a, 0);
        return testsSum + projectsSum;
    }
    averageGrades() {
        const TOTAL_GRADES = 6;
        const avarage = this.sumGrades() / TOTAL_GRADES;
        return Number(avarage.toFixed(2));
    }
}
exports.Student = Student;
