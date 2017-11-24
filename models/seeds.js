const Artist = require('./artist')

// list all existing artists
Artist.find()               // find all artist documents
  .then((artists) => {      // once loaded this function will be called
    console.log('Artists:', artists)
  })
  .catch((error) => {
    console.error(error)
  })

Artist.create([
    { name: 'Phenix' },
    { name: 'Glass Animals' },
    { name: 'Foals' },
  ])
  .then((artist) => {               // when this has completed this will be called
    console.log('Created artist', artist)
  })

