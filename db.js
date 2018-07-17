var mysql = require("mysql2");

function login() {
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