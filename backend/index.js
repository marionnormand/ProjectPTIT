const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./database');

const app = express();
app.use(express.json());
//app.use(express.json());

//const APP_URL = 'http://projetcptit.com';

// Route pour récupérer les données depuis la base de données
app.get("/", (req, res) => {
    let sql = "SELECT * FROM dataptit";
    connection.query(sql, function(err, results) {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête SQL:', err.stack);
            res.status(500).send('Erreur de la base de données');
            return;
        }
        res.send(results);
    });
});


app.get("/temp", (req, res) => {
    let sql = "SELECT Temperature FROM dataptit order by Date DESC LIMIT 1";
    connection.query(sql, function(err, results) {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête SQL:', err.stack);
            res.status(500).send('Erreur de la base de données');
            return;
        }
        res.send(results);
    });
});

app.get("/uv", (req, res) => {
    let sql = "SELECT UV_index FROM dataptit order by Date DESC LIMIT 1";
    connection.query(sql, function(err, results) {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête SQL:', err.stack);
            res.status(500).send('Erreur de la base de données');
            return;
        }
        res.send(results);
    });
});

app.get("/rfid", (req, res) => {
    let sql = "SELECT RFID FROM dataptit order by Date DESC LIMIT 1";
    connection.query(sql, function(err, results) {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête SQL:', err.stack);
            res.status(500).send('Erreur de la base de données');
            return;
        }
        res.send(results);
    });
});


// Démarrage du serveur Express
const PORT = process.env.PORT || 5000; // Utilisation du port spécifié par l'environnement ou 5000 par défaut
app.listen(PORT, function() {
    console.log('Serveur Express démarré sur le port ${PORT}');
});
