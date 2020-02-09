const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

// router.get('/celebrities', (req, res, next) => {
//   res.render('../views/celebrities/celebrities-list.hbs');
// });

module.exports = router;
