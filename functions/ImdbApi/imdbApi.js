/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/always-return */
const rq = require('request-promise');

function getMovieDetailsApi(movieTitle) {
    // const movieTitle = 'furious+7';

    var options = {
        method: 'GET',
        uri: 'http://www.omdbapi.com/',
        qs: {
            apikey: 'd20bef07', 
            t: movieTitle       
        },    
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };    

    return rq(options);
}

function getDoesMovieExists(movieTitle) {
    return new Promise((resolve, reject) => {
        var movieJson = getMovieDetailsApi(movieTitle);
        movieJson.then(movie => {
            if(movie.Title) {
                resolve(true);
            }
            else {
                resolve(false);
            }
        }).catch(err => {
            console.log(err);
            reject(err);
        })
    })
    
}

function getMovieReleaseYear(movie) {
    return new Promise((resolve, reject) => {
        let movieApiCall = getMovieDetailsApi(movie);
        movieApiCall.then(movieDetails => {
            resolve(movieDetails.Year);
        })
    })
    
}


exports.DoesMovieExists = getDoesMovieExists;
exports.MovieReleaseYear = getMovieReleaseYear;

