const ejs = require('ejs');
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const axios = require('axios').default

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
    .then(function (response) {
        res.render('pages/index', { movies: response.data, activePage: 1, genreChosen: false })
    })
    .catch(function (error) {
        console.log(error);
    })
})

app.get('/page/:page', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${req.params.page}`)
    .then(function (response) {
        res.render('pages/index', { movies: response.data, activePage: Number(req.params.page), genreChosen: false })
    })
    .catch(function (error) {
        console.log(error);
    })
})

app.get('/genre/:id/page/:page', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${req.params.id}&page=${req.params.page}`)
    .then(function (response) {
        res.render('pages/index', { movies: response.data, activePage: Number(req.params.page), genreChosen: true, genreID: Number(req.params.id) })
    })
    .catch(function (error) {
        console.log(error);
    })
})

// app.get('/search/:term', (req, res) => {
//     axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${req.params.page}`)
//     .then(function (response) {
//         res.render('pages/index', { movies: response.data, activePage: Number(req.params.page) })
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
// })

app.get('/details/:id', (req, res) => {
    axios.get(`https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}`)
    .then(function (response) {
        res.render('pages/details', { movie: response.data })
    })
    .catch(function (error) {
        console.log(error);
    })
})

app.listen(3000, () => {
})