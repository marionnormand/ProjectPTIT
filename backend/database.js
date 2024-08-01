/*var mysql = require("mysql"); 
var connection = mysql.createConnection({
    host: 'localhost', 
    database: 'dbproject', 
    user: 'root', 
    password: ''
})

module.exports = connection;*/

const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dbproject',
    password: 'root' // Note: Décommentez et ajoutez le mot de passe si nécessaire
});

connection.connect(function(err) {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err.stack);
        return;
    }
    console.log('Base de données connectée avec l\'ID', connection.threadId);
});

module.exports = connection;
