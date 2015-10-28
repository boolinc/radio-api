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
            return db.list().then(function (data) {
                expect(data).to.have.length(0);
            });
        });

    });

});
