const ejs = require("ejs");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const axios = require("axios").default;
const sharedFunctions = require("./sharedFunctions");

app.set("view engine", "ejs");
app.use(express.static("public"));

// Get a list of all genres
let genreList = [];
let gotGenreList = false;
if (!gotGenreList) {
  axios
    .get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}`
    )
    .then(function (response) {
      genreList = response.data.genres;
      gotGenreList = true;
    })
    .catch(function (error) {
      console.log(error);
    });
}

// HOME
app.get("/", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${sorting}?api_key=${process.env.API_KEY}`
    )
    .then(function (response) {
      res.render("pages/index", {
        genreList,
        movies: response.data,
        activePage: 1,
        genreChosen: false,
        searchTermEntered: false,
        searchTerm: "",
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// PAGES
app.get("/page/:page", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&page=${req.params.page}`
    )
    .then(function (response) {
      res.render("pages/index", {
        genreList,
        movies: response.data,
        activePage: Number(req.params.page),
        genreChosen: false,
        searchTermEntered: false,
        searchTerm: "",
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// GENRES
app.get("/genre/:id/page/:page", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${req.params.id}&page=${req.params.page}`
    )
    .then(function (response) {
      res.render("pages/index", {
        genreList,
        movies: response.data,
        activePage: Number(req.params.page),
        genreChosen: true,
        genreID: Number(req.params.id),
        searchTermEntered: false,
        searchTerm: "",
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// SEARCH
app.get("/search?:term", (req, res) => {
  if (req.query.term.length > 0)
    res.redirect(`/search/${req.query.term}/page/1`);
  else res.redirect("/");
});
app.get("/search/:term/page/:page", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${req.params.term}&page=${req.params.page}`
    )
    .then(function (response) {
      res.render("pages/index", {
        genreList,
        movies: response.data,
        activePage: Number(req.params.page),
        genreChosen: false,
        searchTermEntered: true,
        searchTerm: req.params.term,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

// DETAILS PAGE
app.get("/details/:id", (req, res) => {
  axios
    .get(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${process.env.API_KEY}`
    )
    .then(function (response) {
      res.render("pages/details", { movie: response.data, searchTerm: "" });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("server running on localhost:3000");
});
