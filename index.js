const ejs = require('ejs');
const express = require('express')
const app = express()
let activePage = 1
let moviesPerPage = 10
// placeholder objects
let movies = require('./data')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/index', { movies: movies, activePage: activePage, moviesPerPage: moviesPerPage })
})

app.get('/:page', (req, res) => {
    res.render('pages/index', { movies: movies, activePage: Number(req.params.page), moviesPerPage: moviesPerPage })
})

app.listen(3000, () => {
})