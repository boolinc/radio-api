'use strict';

module.exports = function (app) {

    var program     = new app.models.Program()
    ,   validator   = new app.plugins.ValidateData();

    this.list = function () {
        return program.list();
    };

    this.findById = function (id) {
        return program.findById(id);
    };

    this.insert = function (data) {
        return validator([ '_id', 'name' ], data).then(() => {
            program.insert(data);
        });
    };

};
