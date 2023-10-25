const mongoose = require('mongoose');
const filmSchema = new mongoose.Schema({
    id: {
        type: Number,
    },
    title: {
        type: String,
    },
    year: {
        type: Number,
    },
    genre: {
        type: String,
    },
    image: {
        type: String
    },
    description: {
        type: String
    },
    acteurs_principaux: {
        type: Array
    },
    date_de_sortie: {
        type: String
    },
    realisateur: {
        type: String
    }
})
module.exports = Films = mongoose.model('Films', filmSchema, 'films')