'use strict';

module.exports = function (app) {

    var program = new app.models.Program();

    this.list = function () {
        return program.list();
    };

};
