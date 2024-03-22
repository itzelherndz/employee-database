const CLI = require('./lib/cli.js');
const mySQL = require("mysql2");

const cli = new CLI();
const db = mySQL.createConnection(
    {
        host:'localhost',
        user: 'root',
        password: process.env.DB_PASSWORD,
        database: 'employee_db',
    }
);

db.connect((err)=> {
    if(err){
        console.log('Something went wrong. :(');
        return;
    }
    console.log('Connection to db established.');
});

cli.run();

