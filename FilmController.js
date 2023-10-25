const Films = require('../models/Films')

const getFilms = (req, res) => {
    Films.find()
        .then(film => res.status(200).json(film))
        .catch(err => res.status(404).json({ notFound: 'film non trouver' }))
}
const addFilms = (req, res) => {
    Films.create(req.body)
        .then(film => res.status(200).json({ result: 'film bien ajouté' }))
        .catch(err => res.status(404).json({ err: 'film non ajouté' }))
}
const getFilmesById = (req, res) => {
    Films.find({ "id": req.params.id })
        .then(film => res.status(200).json(film))
        .catch(err => res.status(404).json({ err: 'film non trouvé' }))
}
module.exports = { getFilms, addFilms, getFilmesById }