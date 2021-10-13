const ejs = require('ejs');
const express = require('express')
const app = express()
const axios = require('axios').default

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3dec7146ea3697eb18b4879a213a0de1')
    .then(function (response) {
        res.render('pages/index', { movies: response.data.results, activePage: 1 })
    })
    .catch(function (error) {
        console.log(error);
    })
})

app.get('/details/:id', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=3dec7146ea3697eb18b4879a213a0de1`)
    .then(function (response) {
        res.render('pages/details', { movie: response.data })
    })
    .catch(function (error) {
        console.log(error);
    })
})

app.get('/page/:page', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3dec7146ea3697eb18b4879a213a0de1&page=${req.params.page}`)
    .then(function (response) {
        res.render('pages/index', { movies: response.data.results, activePage: Number(req.params.page) })
    })
    .catch(function (error) {
        console.log(error);
    })
})

app.listen(3000, () => {
})