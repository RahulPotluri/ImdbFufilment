const assert = require('assert');
var sinon = require('sinon');
var mocha = require('mocha');
var imdbApi = require('../ImdbApi/imdbApi');
var it = mocha.it;
var describe = mocha.describe;

// describe('imdb response api', () => {
    
//     it('get response from body', () => {
//           assert.equal('true', imdbApi.DoesMovieExists('speed'));
//     })
// });


describe('imdb response api', () => {

    let response, apiStub;

    before(() => {
        response;
        apiStub;
    })

    beforeEach(() => {

        response = {
            'Title' : 'Rocky',
            'Year' : '1990'
        };        
    
        apiStub = sinon.stub(imdbApi, 'MovieApi').returns(Promise.resolve(response)); 
         
    });

    afterEach(() => {
        apiStub.restore();
    });

   // const movieYear = 

    it('should return expected response', () => {        

        

        assert.equal('true', imdbApi.DoesMovieExists('Any'));
    });


})

