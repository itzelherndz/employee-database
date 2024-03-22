// packages needed for application
const inquirer = require('inquirer');
const fs = require('fs');
const generateSQL = require('./lib/generateSQL');

// array of application options
const options = [
    'View Departments',
    'Add a Department',
    new inquirer.Separator(),
    'View Roles',
    'Add a Role',
    new inquirer.Separator(),
    'View Employees',
    'Add an Employee',
    'Update an Employee Role'
];

// function to initialize app
function init() {


    // inquirer prompt method to ask user input
    inquirer.prompt(
        {
            type:'choices',
            name:'options',
            message:'Select an Option:',
            choices: options
        }
    )
    .then((data)=>{

    });
}

init();