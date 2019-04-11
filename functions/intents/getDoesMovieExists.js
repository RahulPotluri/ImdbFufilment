/* eslint-disable promise/always-return */
const imdbApi = require("../ImdbApi/imdbApi");

function getDoesMovieExists(agent) {
  var movieTitle = agent.parameters.movieName;
  var movieJson = imdbApi.getMovieDetailsApi(movieTitle);
  return movieJson
    .then(movie => {
      if (movie.Title) {
        agent.setContext({
          name: "movie",
          lifespan: 100,
          parameters: { movie: movie.Title }
        });
        agent.add(
          movie.Title +
            "it is a nice movie. Would you like to more about its cast, Release Date and Director?"
        );
                
      } else {
        agent.add("Movie doesnt exists " + movie.Title);
      }
    })
    .catch(err => {
      console.log(err);
    });
}

exports.getDoesMovieExists = getDoesMovieExists;
