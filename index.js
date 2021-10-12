const ejs = require('ejs');
const express = require('express')
const app = express()
const axios = require('axios').default

let activePage = 1
let moviesPerPage = 10
// placeholder objects
// let movies = require('./data')

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3dec7146ea3697eb18b4879a213a0de1')
    .then(function (response) {
        res.render('pages/index', { movies: response.data.results, activePage: activePage, moviesPerPage: moviesPerPage })
    })
    .catch(function (error) {
        console.log(error);
    })
})

app.get('/:page', (req, res) => {
    res.render('pages/index', { movies: movies, activePage: Number(req.params.page), moviesPerPage: moviesPerPage })
})

app.listen(3000, () => {
})