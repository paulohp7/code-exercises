class Student {

    private _enrollment: number;
    private _name: string;
    private _tests: number[];
    private _projects: number[];

    constructor(
        enrollment: number,
        name: string,
        tests: number[],
        projects: number[],
    ) {
        this._enrollment = enrollment;
        this._name = name;
        this._tests = tests;
        this._projects = projects;
    }

    private sumGrades() : number {
        const testsSum = this._tests.reduce((partialSum, a) => partialSum + a, 0);
        const projectsSum = this._projects.reduce((partialSum, a) => partialSum + a, 0);
        return testsSum + projectsSum;
    }

    avaregaGrades() : number {
        const TOTAL_GRADES: number = 6;
        const avarage = this.sumGrades() / TOTAL_GRADES;
        return Number(avarage.toFixed(2));
    }
}

const student1 = new Student(1234, 'John', [10, 10, 10, 10], [10, 10]);
console.log(`John avarage grade is: ${student1.avaregaGrades()}`);
const student2 = new Student(4321, 'Nick', [10, 5, 9, 8], [8, 7]);
console.log(`Nick avarage grade is: ${student2.avaregaGrades()}`);