class Add {
    constructor(selection,values){
        this.selection=selection;
        this.values=values;
        this.string='';
    }
    fields(){
        switch (this.selection){
            case 'department': return 'name';
            case 'role': return 'name,salary,department';
            case 'employee': return 'first_name,last_name,role,manager';
            default: return;
        }
    }
    renderSQL(){
        return `INSERT INTO ${this.selection}(${this.fields()}) VALUES ('${this.values.toString()}');` ;
    }
}

module.exports = Add;