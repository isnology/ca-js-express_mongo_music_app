const express = require('express')
const Artist = require('../models/artist')

const router = express.Router()

router.get('/artists', (req, res) => {
  Artist.find().then((artists) => {
    res.json(artists)
  })
})

router.get('/artists/:id', (req, res) => {
  const id = req.params.id
  Artist.findById(id).then((artist) => {
    if (artist)
      res.json(artist)
    else
      res.status(404).json({ error: `Artist not found with id: '${id}'` })
  }).catch((error) => {
    res.status(400).json({ error: error.message })
  })
})

module.exports = router
