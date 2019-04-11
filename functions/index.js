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
  
  // let movieNameToSearch = request.body.queryResult.parameters['movieName'];
  
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

   // Run the proper function handler based on the matched Dialogflow intent name
 let intentMap = new Map();
 intentMap.set('Default Welcome Intent', welcome);
 intentMap.set('Default Fallback Intent', fallback);
 intentMap.set('1_MovieName', require('./intents/getDoesMovieExists').getDoesMovieExists);
 intentMap.set('1.1_movieName_releaseYear',  require('./intents/getMovieReleaseYear').getMovieReleaseYear);
 intentMap.set('1.1_MovieName_MovieDetails-yes', require('./intents/getMovieDetailsCastActor').getMovieDetailsCastActor);
 agent.handleRequest(intentMap); 


});



