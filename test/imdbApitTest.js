/* eslint-disable promise/catch-or-return */
const assert = require('assert');
var sinon = require('sinon');
var mocha = require('mocha');
var chai = require('chai');
var imdbApi = require('../ImdbApi/imdbApi');
var it = mocha.it;
var describe = mocha.describe;
let expect = chai.expect;

describe('imdb response api', () => {

    let response, apiStub;

    it('should return expected response', (done) => {        
        // eslint-disable-next-line promise/always-return
        imdbApi.DoesMovieExists('speed').catch( result => {
            expect(result).to.equal(false);            
        // eslint-disable-next-line promise/always-return
        } ).then( () => { 
            done()});
    });


})

