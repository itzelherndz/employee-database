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
        for(let i=0; i<this.values.length; i++){
            if (i<this.values.length-1) {
                this.string.concat(`${this.value[i]},`);
            } else this.string.concat(`${this.value[i]}`);
        }
        return `INSERT INTO ${this.selection}(${this.fields()}) VALUES (${this.string});` ;
    }
}

module.exports = Add;