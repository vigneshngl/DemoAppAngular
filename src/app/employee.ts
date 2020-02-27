export class Employee {
    empName : string
    password : {
        empPswd : string,
        empCPswd : string
    }
    empEmail : string
    empDepartment : string
    consent : boolean

    constructor (values : Object = {}) {
        Object.assign(this, values)
    }
}