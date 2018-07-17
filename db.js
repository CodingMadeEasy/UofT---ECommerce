var mysql = require("mysql");

function login() {
    console.log(process.env.DBHOST);
    console.log(process.env.DBUSER);
    console.log(process.env.DBPASSWORD);

    var connection = mysql.createConnection({
        host: process.env.DBHOST || "localhost",
        port: 3306,
        user: process.env.DBUSER || "root", 
        password: process.env.DBPASSWORD || "root", 
        database: process.env.DB || 'hat_store', 
        multipleStatements: true
    });

    return connection;
}

module.exports = login;