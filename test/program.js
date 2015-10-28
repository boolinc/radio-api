/* global expect, describe, before, it */
'use strict';

describe('Programs', function () {
    var booljs  = require('bool.js')
    ,   db, dao;

    before(function () {
        return booljs('com.gentebool.radio').run().then(function (api) {
            db = new api.app.models.Program();
            dao = new api.app.dao.Program();
        });
    });

    describe('Database', function () {
        before(function (done) { db.collection.remove(done); });

        it('Programs list must be empty', function () {
            return expect(db.list()).to.eventually.have.length(0);
        });

        it('Creates a new program', function () {
            return db.insert({
                _id: 'tripping',
                name: 'The Midnight Tripping Show'
            });
        });

        it('Programs list should contain one element', function () {
            return expect(db.list()).to.eventually.have.length(1);
        });

    });

});
