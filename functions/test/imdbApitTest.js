const assert = require('assert');
var mocha = require('mocha');
var imdbApi = require('./functions/ImdbApi/imdbApi');
var it = mocha.it;
var describe = mocha.describe;

describe("imdb response api", function() {
    it('get response from body', function(){
        assert.equal('response', imdbApi.movieDetails)
    })
});