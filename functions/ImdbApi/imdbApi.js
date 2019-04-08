import request from 'request';
const apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=d20bef07';

const movieTitle = 'furious+7';

function getMovieDetails(agent) 
return request(apiUrl, function (error, response, body) {
    if(!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
     }
});