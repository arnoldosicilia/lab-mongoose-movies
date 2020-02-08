const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')


//${process.env.DB}
mongoose.connect(`mongodb://localhost/DE-celebrities-movies`)

const celebrities = [
    {
      name: 'Tom Cruise',
      occupation: 'Actor',
      catchPhrase: 'Soy el mas guapo blablabla',

    },
    {
      name: 'Arnold Suaseneguer',
      occupation: 'Actor',
      catchPhrase: 'Soy el mas petao blablabla',

    }
]

Celebrity.create(celebrities, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${celebrities.length} books`)
  mongoose.connection.close();
});