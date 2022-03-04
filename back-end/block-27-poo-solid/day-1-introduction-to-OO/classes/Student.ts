export class Student {

    private _enrollment: string;
    private _name: string;
    private _tests: number[];
    private _projects: number[];

    constructor(
        enrollment: string,
        name: string,
    ) {
        this._enrollment = enrollment;
        this._name = name;
        this._tests = [];
        this._projects = [];
    }

    public get enrollment() : string {
        return this._enrollment;
    }

    public get name() : string {
        return this._name;
    }

    public set tests(grades: number[]){
        if (grades.length > 4) {
            throw new Error('The student can only have 4 test grades.');
        }
        this._tests = grades;
    }

    public get tests() {
        return this._tests;
    }

    public set projects(grades: number[]){
        if (grades.length > 2) {
            throw new Error('The student can only have 2 project grades.');
        }
        this._projects = grades;
    }

    public get projects() {
        return this._projects;
    }

    private sumGrades() : number {
        const testsSum = this._tests.reduce((partialSum, a) => partialSum + a, 0);
        const projectsSum = this._projects.reduce((partialSum, a) => partialSum + a, 0);
        return testsSum + projectsSum;
    }

    averageGrades() : number {
        const TOTAL_GRADES: number = 6;
        const avarage = this.sumGrades() / TOTAL_GRADES;
        return Number(avarage.toFixed(2));
    }
}
