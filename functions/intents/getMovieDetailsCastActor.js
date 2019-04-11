/* eslint-disable promise/always-return */
const imdbApi = require("../ImdbApi/imdbApi");

function getMovieDetailsCastActor(agent) {
  var movieTitle = agent.parameters.movieName;
  var movieJson = imdbApi.getMovieDetailsApi(movieTitle);
  return movieJson
    .then(movie => {
      if (movie.Title) {
        agent.add(String("Actors are - " + movie.Actors 
                + ' Release date is ' + movie.Year 
                + 'Director is ' + movie.Director));
        console.log('Movie name is ' + movie.Title);
      }
      else{
          agent.add("No details can be found");
      }
    })
    .catch(err => {
      console.log(err);
    });
}

exports.getMovieDetailsCastActor = getMovieDetailsCastActor;
