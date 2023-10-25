const filmController = require('../controllers/FilmController.js')
const router = require('express').Router()


// get tous les films
router.get('/getFilms', filmController.getFilms)
// get les details d'un film
router.get('/:id', filmController.getFilmesById)

// post pour ajouter un film

router.post('/addFilms', filmController.addFilms)
// put Modifier un film
// router.put('putFilmes/:id', filmController.putFilmes)
//delete filme
// router.delete('/:id', filmController.deleteFilmes) 

module.exports = router;
