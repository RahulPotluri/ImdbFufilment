const {WebhookClient } = require('dialogflow-fulfillment');

const webhookProcessing = (req, res) => {

    const agent = new WebhookClient({
        request: req,
        response: res
    });

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set('1_MovieName', require('./intents/getMovieDetails'));
    intentMap.set('1.1_movieName_plot-yes', require('./intents/getMoviePlot'));
    intentMap.set('Default Welcome Intent - yes', require('./intents/welcomeIntentYes'));
    intentMap.set('1.1_movieName_releaseYear', require('./intents/getMovieReleaseYear'));
    
    agent.handleRequest(intentMap);

};

module.exports = webhookProcessing;
