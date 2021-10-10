const ejs = require('ejs');
const express = require('express')
const app = express()
let activePage = 0
// placeholder objects
let movies = require('./data')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', { movies: movies, activePage: Number(0) })
})

app.get('/:page', (req, res) => {
    res.render('pages/index', { movies: movies, activePage: Number(req.params.page) })
})

app.listen(3000, () => {
})