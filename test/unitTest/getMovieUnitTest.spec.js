const request = require('supertest');
const should = require('should');
const express = require('express');
const app = require('../../app');

describe('request.agent(app)', (done) => {

    it('get movies', () => {
        request.agent(app)
            .get('/')
            .expect(200, done)
            ;
    });

    it('get movie details', () => {
        request.agent(app)
            .post('/webhook')
            .send(JSON.stringify(require('../data/movie_Thor.json')))
            .expect((res) => {
                console.log(res.body);
                expect(res.body).to.deep.equal(require('../data/movie_Thor_response.json'));
                done();
            });
            
    });
});