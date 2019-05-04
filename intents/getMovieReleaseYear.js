/* eslint-disable promise/always-return */
const imdbApi = require("../ImdbApi/imdbApi");

function getMovieReleaseYear(agent) {
  var movieTitle = agent.getContext("movie").parameters.movie;

  var movieJson = imdbApi.getMovieDetailsApi(movieTitle);

  return movieJson
    .then(movieDetails => {
      if (movieDetails.Year) {
        agent.add("Release year is " + movieDetails.Year);
      } else {
        agent.add("Release year not found");
      }
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = getMovieReleaseYear;
