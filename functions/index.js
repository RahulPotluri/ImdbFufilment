'use strict';
import imdbApi from imdbApi.js;

var firebase = require("firebase");
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
var express = require('express')
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  function getEplTopRank(agent) {
      agent.add('Top ranking team is liverpool');
      agent.add(imdbApi.getMovieDetails);
    // return getTopTeam().then((output) => {
    //   agent.add('Top ranking team is liverpool');
    //   //agent.add(output);
    //   return null;
    // }, err=>
    // {
    //   throw err;
    // });
}



 // Run the proper function handler based on the matched Dialogflow intent name
 let intentMap = new Map();
 intentMap.set('Default Welcome Intent', welcome);
 intentMap.set('Default Fallback Intent', fallback);
 intentMap.set('English premier league Lead', getEplTopRank);
 agent.handleRequest(intentMap);

});

class Team {
    constructor(name, rank, points) {
      this.name = name;
      this.rank = rank;
      this.points = points;
    } 
  }
  
  var eplTeam = [];
  eplTeam.push(new Team('Liverpool', 1, 39));
  eplTeam.push(new Team('Manchester City', 2, 37));
  eplTeam.push(new Team('Manchester United', 3, 30));

