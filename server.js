const express = require('express');
const app = express()
const connect = require('./database/connexion')
const cors = require('cors')

// Middleware
app.use(express.json())
app.use(cors())

// Routes
const filmR = require('./routes/FilmRoute.js')

// connection database
connect()

// utiliser les routes
app.use('/api/films', filmR)

// Lancement du serveur

app.listen(8080, () => {
    console.log('Serveur ouvert au port 8080')
})