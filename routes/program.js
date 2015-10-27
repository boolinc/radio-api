'use strict';

module.exports = function (app) {

    var program = new app.controllers.Program();

    return [
        {
            method: 'get',
            url: '/api/programs',
            action: program.list,
            cors: true
        }
    ];

};
