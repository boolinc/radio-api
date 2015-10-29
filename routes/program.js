'use strict';

module.exports = function (app) {

    var program = new app.controllers.Program();

    return [
        {
            method: 'get',
            url: '/api/programs',
            action: program.list,
            cors: true
        },
        {
            method: 'get',
            url: '/api/programs/:id',
            action: program.find,
            cors: true
        },
        {
            method: 'post',
            url: '/api/programs',
            action: program.insert,
            cors: true
        }
    ];

};
