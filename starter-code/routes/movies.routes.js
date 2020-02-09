const express = require('express');
const router = express.Router();

const Movie = require('../models/movie.model')



// GET MOVIES LIST 

router.get('/index', (req, res, ) => {

  Movie.find()
    .then(moviesFromDB => res.render('movies/moviesList', {
      movies: moviesFromDB
    }))
    .catch(err => console.log(err))
})



// INSERT A NEW MOVIE IN THE DB

router.get('/new', (req, res) => res.render('movies/newMovie'))
router.post('/new', (req, res) => {
  
  const { title, genre, plot } = req.body
  
  console.log(req.body)
  Movie.create({ title, genre, plot })
  .then(() => res.redirect('/movies/index'))
  .catch(err=>console.log(err))
})



// GET MOVIES DETAILS  

router.get('/:id', (req, res) => {
  
  Movie.findById(req.params.id)
  .then(movieFromDB => res.render('movies/movieDetails', movieFromDB))
  .catch(err => console.log(err))
})


// DELETE MOVIE

router.get('/:id/delete', (req, res) => {

  Movie.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/movies/index'))
    .catch(err => console.log(err))
})


// MODIFY MOVIE

router.get('/:id/edit' , (req,res) => {

  Movie.findById(req.params.id,)
    .then(movieFromDB => res.render('movies/movieModifyForm', movieFromDB))
    .catch(err => console.log(err))
})

router.post('/:id/edit', (req,res) => {

  const {title,genre,plot} = req.body
  Movie.findByIdAndUpdate(req.params.id, {title,genre,plot})
    .then(() => res.redirect('/movies/index'))
    .catch(err => console.log(err))

})


module.exports = router;



