/* eslint-disable promise/always-return */
const imdbApi = require("../ImdbApi/imdbApi");

function getMovieDetails(agent) {
  var movieTitle = agent.parameters.MovieName;
  var movieJson = imdbApi.getMovieDetailsApi(movieTitle);
  return movieJson
    .then(movie => {
      if (movie.Title) {
        agent.setContext({
          name: "movie",
          lifespan: 5,
          parameters: { movie: movie.Title }
        });
        agent.add(`${movie.Title} cast includes ${movie.Actors} and Release date is  ${movie.Released }. 
        Director's name is ${movie.Director}. Would you like to know plot of movie?`);
                
      } else {
        agent.add("I am unable to find what you are looking for, please try some other movie.");
      }
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = getMovieDetails;
