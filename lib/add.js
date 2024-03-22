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
        this.values.forEach(value => this.string.concat(`${value},`));
        return `INSERT INTO ${this.selection}(${this.fields()}) VALUES (${this.string});` ;
    }
}

module.exports = Add;