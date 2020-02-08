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



// INSERT A NEW CELEBRITY IN THE DB

router.get('/new', (req, res) => res.render('celebrities/newCelebrity'))
router.post('/new', (req, res) => {

  const { name, occupation, catchPhrase } = req.body
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities/index'))
    .catch(err=>console.log(err))
})



// GET CELEBRITY DETAILS  

router.get('/:id', (req ,  res) => {
    
    Celebrity.findById(req.params.id)
      .then(celebrityFromDB => res.render('celebrities/celebrityDetails', celebrityFromDB))
      .catch(err => console.log(err))
})



// DELETE CELEBRITY

router.get('/:id/delete', (req, res) => {

  Celebrity.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/celebrities/index'))
    .catch(err => console.log(err))
})



// MODIFY CELEBRITY

router.get('/:id/edit', (req, res) => {
  
    Celebrity.findById(req.params.id)
    .then(celebrityFromDB => res.render('celebrities/celebrityModifyForm', celebrityFromDB))
    .catch(err => console.log(err))
}) 

router.post('/:id', (req, res) => {

  const { name, occupation, catchPhrase } = req.body
  Celebrity.findByIdAndUpdate({ name, occupation, catchPhrase })
    .then(() => res.redirect('/celebrities/index'))
    .catch(err=>console.log(err))
})




module.exports = router;