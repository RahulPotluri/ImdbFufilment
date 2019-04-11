/* eslint-disable promise/always-return */
'use strict';

const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
var imdbApi = require('./ImdbApi/imdbApi');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  
  let movieNameToSearch = request.body.queryResult.parameters['movieName'];
  //console.log('movie name is ' + movieNameToSearch);

  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  function getDoesMovieExists(agent) {
      if(imdbApi.DoesMovieExists(movieNameToSearch)) {
        agent.setContext({'name': 'movie', 'lifespan': 100, 'parameters': {'movie': movieNameToSearch}});
        agent.add(movieNameToSearch + 'it is a nice movie. Would you like to more about its cast, Release Date and plot?');
      }
      else {
        agent.add('Movie doesnt exists ' + movieNameToSearch);
      }

  }

  function getMovieReleaseYear(agent) {
    var movieName = agent.getContext('movie').parameters.movie;
     var year = imdbApi.MovieReleaseYear(movieName);
     // eslint-disable-next-line promise/catch-or-return
     return year.then(movieYear => {
       
      agent.add('Release year ' + movieYear);
      response.json({'fulfillmentText': 'Release year ' + movieYear});
     });
      
  }
const {test2, test} = require('./intents/test')
 // Run the proper function handler based on the matched Dialogflow intent name
 let intentMap = new Map();
 intentMap.set('Default Welcome Intent', welcome);
 intentMap.set('Default Fallback Intent', fallback);
 intentMap.set('Movie Name', getDoesMovieExists);
 intentMap.set('movieName_releaseYear', getMovieReleaseYear);
 intentMap.set('test', test);
 agent.handleRequest(intentMap);

});



