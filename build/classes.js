"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department(name) {
        this.employees = [];
        this.name = name;
    }
    Department.prototype.describe = function () {
        console.log("[DEPARTMENT] Name: " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    return Department;
}());
exports.Department = Department;
