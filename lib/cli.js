const Add = require('./add');
const View = require('./view');
const Update = require('./update');
const inquirer = require('inquirer');
const {writeFile} = require('fs/promises');
const {createDocument} = require('./document');

class CLI {
    constructor(){

    }
    run() {
        return inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'selection',
                    message: 'Select an Option:',
                    choices: [
                        'View Departments',
                        'Add a Department',
                        'View Roles',
                        'Add a Role',
                        'View Employees',
                        'Add an Employee',
                        'Update an Employee Role'
                    ],
                },
            ],)
            .then(({selection}) =>{
                switch (selection){
                    case 'View Departments': this.view('department'); break;
                    case 'Add a Department': this.add('department'); break;
                    case 'View Roles': this.view('role'); break;
                    case 'Add a Role': this.add('role'); break;
                    case 'View Employees': this.view('employee'); break;
                    case 'Add an Employee': this.add('employee'); break;
                    case 'Update an Employee Role': this.update(); break;
                    default: break;
                }
            })
            .catch((err) =>{
                console.err(err);
                console.log('Something went wrong.');
            });
    }
    view(selection){
        const viewEl = new View(selection);
        console.log(viewEl);
    }
    add(selection){
        const addEl = new Add(selection,123);
        console.log(addEl);
    }
    update(){
        console.log('update');
    }
}

module.exports = CLI;