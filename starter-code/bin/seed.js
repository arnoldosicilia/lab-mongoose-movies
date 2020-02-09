const mongoose = require('mongoose')
const Celebrity = require('../models/celebrity.model')
const Movie = require('../models/movie.model')


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
  console.log(`Created ${celebrities.length} celebrities`)
  mongoose.connection.close();
});


mongoose.connect(`mongodb://localhost/DE-celebrities-movies`)


const movies = [
  {
    title: 'Lord of the rings I',
    genre: 'fantasy',
    plot: 'blablabalblalblablalbal'
  },
  {
    title: 'Lord of the rings II',
    genre: 'fantasy',
    plot: 'blablabalblalblablalbal'
  },
  {
    title: 'Lord of the rings III',
    genre: 'fantasy',
    plot: 'blablabalblalblablalbal'
  },
  {
    title: 'Lord of the rings IV',
    genre: 'fantasy',
    plot: 'blablabalblalblablalbal'
  }
]

Movie.create(movies, (err) => {
  if (err) {
    throw (err)
  }
  console.log(`Created ${movies.length} movies`)
  mongoose.connection.close();
});

