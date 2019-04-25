const imdbApi = require("../ImdbApi/imdbApi");

const moviePlot = (agent) => {
  var movieTitle = agent.getContext("movie").parameters.movie;
  var movieJson = imdbApi.getMovieDetailsApi(movieTitle);
  return movieJson
    .then(movie => {
      if (movie.Title) {
        agent.add(`${movie.Plot} .Please let me know which other movie would you like to know about?`);
      }
      else{
          agent.add("No plot of movie found");
      }
      return movie.Title;
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = moviePlot;