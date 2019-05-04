/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
const request = ''
const getDoesMovieExists = require('../intents/getDoesMovieExists').getDoesMovieExists;
const {WebhookClient} = require('dialogflow-fulfillment');

var agent = new WebhookClient();
getDoesMovieExists('Rocky', agent).then(exists => {
    console.log(exists);
});
