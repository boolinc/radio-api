/* global expect, describe, before, it */
'use strict';

describe('Users', function () {
    var booljs  = require('bool.js')
    ,   db, dao;

    before(function () {
        return booljs('com.gentebool.radio').run().then(function (api) {
            db = new api.app.models.User();
            dao = new api.app.dao.User();
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
