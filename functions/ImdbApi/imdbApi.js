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
    var movieJson = getMovieDetailsApi(movieTitle).then( id => {
        if(id.Title) {
            return true;
        }
        else {
            return false;
        }
    });    
    return movieJson;
}

function getMovieReleaseYear(movieTitle) {
    return getMovieDetailsApi(movieTitle).then(id => {        
        return id.Year;
    });    
    
}


exports.DoesMovieExists = getDoesMovieExists;
exports.MovieReleaseYear = getMovieReleaseYear;
exports.MovieApi = getMovieDetailsApi;
