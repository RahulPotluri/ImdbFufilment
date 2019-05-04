const welcomeIntentYes = (agent) => {
    agent.setFollowupEvent('1_MovieName');
    var movieTitle = agent.getContext("movie");
    if(movieTitle) {
        if(movieTitle.parameters.MovieName) {
            agent.context.delete('movie');
        }
    }
    
    agent.add('transferring to Movie name intent');
    console.log("transfer to another intent");
};

module.exports = welcomeIntentYes;