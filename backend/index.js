const express = require("express")
const port = process.env.port || 5000 
const mysql = require('mysql'); 

const app = express();

/*app.get("/", (req, res) => {
    res.send("Booonjour")
})*/

app.listen(port, () => {
    console.log("Serveur OK");
})


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ptit2024+',
    database: 'dbPTIT',
    port: 3306,
})

connection.connect((err) => {
    if(err) {
        console.log("erreur de connexion : "+err.stack)
        return; 
    }
    console.log("connexion reussie avec la bdd")
});