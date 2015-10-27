/* jshint esnext:true */
'use strict';

module.exports = function (app) {

    var json    = new app.views.Json()
    ,   program = new app.dao.Program();

    this.list = function (req, res, next) {
        json.promise(program.list(), res, next);
    };

};
