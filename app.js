// app.js
const express = require('express');
const app = express();
const port = 3000;

// Définition du moteur de modèle EJS
app.set('view engine', 'ejs');

// Route pour la page d'accueil
app.get('/', (req, res) => {
    // Les données à passer au modèle
    const data = {
        name: 'John'
    };

    // Rendre la page index.ejs avec les données
    res.render('index', data);
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
