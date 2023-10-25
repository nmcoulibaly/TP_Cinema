const mongoose = require('mongoose');
require('dotenv').config;

const connect = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect('mongodb+srv://ndeye:ndeye@cluster0.ckwhwr4.mongodb.net/films?retryWrites=true&w=majority')
        console.log("Connexion réussie!")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}
module.exports = connect