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

    
}