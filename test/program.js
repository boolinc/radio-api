/* global expect, describe, before, it */
'use strict';

describe('Programs', function () {
    var booljs      = require('bool.js')
    ,   supertest   = require('supertest-as-promised')
    ,   db, dao, agent;

    before(function () {
        return booljs('com.gentebool.radio').run().then(function (api) {
            db = new api.app.models.Program();
            dao = new api.app.dao.Program();
            agent = supertest(api.server);
        });
    });

    describe('Database', function () {
        before((done) => { db.collection.remove(done); });

        it('Programs list must be empty', () => {
            return expect(db.list()).to.eventually.have.length(0);
        });

        it('Creates a new program', () => {
            return db.insert({
                _id: 'tripping',
                name: 'The Midnight Tripping Show'
            });
        });

        it('Find newly created program by id', () => {
            return db.findById('tripping');
        });

        it('Programs list should contain one element', () => {
            return expect(db.list()).to.eventually.have.length(1);
        });

    });

    describe('DAO', function () {
        before((done) => { db.collection.remove(done); });

        it('Creates a new program', () => {
            return dao.insert({
                _id: 'tripping',
                name: 'The Midnight Tripping Show'
            });
        });

        it('Find newly created program by id', () => {
            return dao.findById('tripping');
        });
    });

    describe('Controller', function () {
        before((done) => { db.collection.remove(done); });

        it('Creates a new program', () => {
            return (agent
                .post('/api/programs')
                .send({
                    _id: 'tripping',
                    name: 'The Midnight Tripping Show'
                })
                .expect(200)
            );
        });

        it('If data is missing, retrieve a 400', () => {
            return (agent
                .post('/api/programs')
                .send({
                    name: 'The Midnight Tripping Show'
                })
                .expect(400)
            );
        });

        it('Find newly created program by id', () => {
            return (agent
                .get('/api/programs/tripping')
                .expect(200)
            );
        });
    });



});
