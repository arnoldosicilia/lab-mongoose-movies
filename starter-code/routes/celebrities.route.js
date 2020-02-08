const express = require('express');
const router = express.Router();

const Celebrity = require('../models/celebrity.model')

// GET CELEBRITIES LIST 

router.get('/index', (req, res, ) => {
  
  Celebrity.find()
    .then(celebritiesFromDB => res.render('celebrities/celebritiesList', {
    celebrities: celebritiesFromDB
  }))
    .catch(err => console.log(err))
})

// INSET A NEW CELEBRITY IN THE DB

router.get('/new', (req, res) => res.render('celebrities/newCelebrity'))
router.post('/new', (req, res) => {

  const { name, occupation, catchPhrase } = req.body
  Celebrity.create({ name, occupation, catchPhrase })
    .then(newCelebrity => res.redirect('/celebrities/index'))
    .catch(err=>console.log(err))
})

// GET CELEBRITY DETAILS  

router.get('/:id', (req ,  res) => {
    
    Celebrity.findById(req.params.id)
      .then(cebelityFromDB => res.render('celebrities/celebrityDetails', cebelityFromDB))
})

  


module.exports = router;