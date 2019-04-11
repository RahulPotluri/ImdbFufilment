/* eslint-disable promise/catch-or-return */
/* eslint-disable promise/always-return */
const test2 = (agent) => {
    agent.add('This is a test');
}

const test = (agent) => {
    test2(agent);
    agent.add('This is a test');
}

const DoesMovieExist = require('../ImdbApi/imdbApi').MovieReleaseYear;

DoesMovieExist('Rocky').then(exist => {
   console.log(exist)
})
//module.exports = {test, test2};