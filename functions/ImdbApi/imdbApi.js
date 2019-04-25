/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/always-return */
const rq = require("request-promise");

function getMovieDetailsApi(movieTitle) {
  // const movieTitle = 'furious+7';
  var options = {
    method: "GET",
    uri: "http://www.omdbapi.com/",
    qs: {
      apikey: "d20bef07",
      t: movieTitle
    },
    headers: {
      "User-Agent": "Request-Promise"
    },
    json: true
  };

  return rq(options);
}

exports.getMovieDetailsApi = getMovieDetailsApi;

