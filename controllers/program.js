'use strict';

module.exports = function (app) {

    var json    = new app.views.Json()
    ,   program = new app.dao.Program();

    this.list = function (req, res, next) {
        json.promise(program.list(), res, next);
    };

    this.find = function (req, res, next) {
        json.promise(program.findById(req.params.id), res, next);
    };

    this.insert = function (req, res, next) {
        json.promise(program.insert(req.body), res, next);
    };

};
