class Update {
    constructor(employeeId, role){
        this.employeeId=employeeId;
        this.role=role;
    }
    renderSQL(){
        return `UPDATE employee SET role = ${this.role} WHERE id = ${this.employeeId};`;
    }
}

module.exports = Update;