const rq = require('request-promise');


//const apiUrl = 'http://www.omdbapi.com/?apikey=d20bef07' + '&t=' + 'furious+7';

var options = {
    method: 'GET',
    uri: 'http://www.omdbapi.com/',
    qs: {
        apikey: 'd20bef07',        
    },    
    headers: {
        'User-Agent': 'Request-Promise'
    },
    json: true
};

function getMovieDetails() {
    const movieTitle = 'furious+7';
    options.qs.t = movieTitle;
    
    console.log(options);

    rq(options)
        .then( body => {

                console.log(body);
                return body;
                        
        })
        .catch(function(err) {
            console.log(err);
        });

}

// function getMovieDetails(agent) {
//     return new Promise((resolve, reject) => { 
//         request(apiUrl, function (error, response, body) {
//             if(!error && response.statusCode === 200) {
//                 console.log(body) // Print the google web page.
//                 resolve(body);
//             } else {
//                 reject(error);
//             }
//         });
//     });
// }



exports.movieDetails = getMovieDetails;
