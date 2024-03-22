class View{
    constructor(selection){
        this.selection=selection;
    }
    renderSQL(){
        switch (this.selection){
            case 'department': return 'SELECT * FROM department;'
            case 'role': return 'SELECT role.id, role.title AS job_title, role.salary, department.name AS department FROM role JOIN department ON role.department_id=department.id;';
            case 'employee': return 'SELECT * FROM employee';
            default: return;
        }
    }
}

module.exports = View;