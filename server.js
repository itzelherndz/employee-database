const Add = require('./lib/add');
const View = require('./lib/view');
const Update = require('./lib/update');
const inquirer = require('inquirer');
const mySQL = require("mysql2");

const db = mySQL.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: '',
        database: 'employee_db',
    }
);

function run() {
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
                    'Update an Employee Role',
                    'End Session'
                ],
            },
        ],)
        .then((data) =>{
            switch (data.selection){
                case 'View Departments': view('department'); break;
                case 'Add a Department': add('department'); break;
                case 'View Roles': view('role'); break;
                case 'Add a Role': add('role'); break;
                case 'View Employees': view('employee'); break;
                case 'Add an Employee': add('employee'); break;
                case 'Update an Employee Role': update(); break;
                case 'End Session': endSession(); break;
                default: break;
            }
        })
        .catch((err) =>{
            console.log(err);
            console.log('Something went wrong.');
        });
}

function view(selection){
    const viewEl = new View(selection);
    db.query(viewEl.renderSQL(), (err, res) => {
        if (err) console.log('Error',err);
        console.log('\n');
        console.table(res);
    });
    run();
}

function add(selection){
    switch(selection){
        case 'department':
            inquirer.
                prompt(
                    [
                        {
                            type:'input',
                            name: 'department',
                            message: 'Input department name:',
                        },
                    ],
                )
                .then((data) => {
                    const addEl = new Add(selection,[data.department]);
                    db.query(addEl.renderSQL(), (err) => {
                        if (err) console.log('Error',err);
                    });
                    run();
                })
                .catch((err) =>{
                    console.log(err);
                    console.log('Something went wrong.');
                });
            break;
        case 'role':
            inquirer.
                prompt(
                    [
                        {
                            type:'input',
                            name: 'role',
                            message: 'Input role name:',
                        },
                        {
                            type:'number',
                            name:'salary',
                            message:'Input salary:',
                        },
                        {
                            type:'number',
                            name:'department',
                            message:'Input an department id',
                        }
                    ],
                )
                .then((data) => {
                    const addEl = new Add(selection,[data.departmentName]);
                    db.query('SELECT * FROM department;', (err,res) => {
                        if (err) console.log('Error',err);
                        console.table(res);
                    });
                    
                    run();
                })
                .catch((err) =>{
                    console.log(err);
                    console.log('Something went wrong.');
                });
            break;

        default: break;
    }
    // const addEl = new Add(selection,123);
    // console.log(addEl);

}

function update(){
    console.log('update');
}

function endSession(){
    console.log('---Ending Session---');
    process.exit();
}


db.connect((err)=> {
    if(err){
        console.log('Error:',err);
    } else {
    console.log('Connection to database established.');
    run();
    }
});




