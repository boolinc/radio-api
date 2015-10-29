'use strict';

module.exports = function (app) {
    /* global q */ var Q = q;

    return function (variables, data) {
        var unmetVariables = [];

        for(var index in variables){
            if(!data.hasOwnProperty(variables[index]))
                unmetVariables.push(variables[index]);
        }

        if(unmetVariables.lenght > 0){
            return Q.reject(new app.Error(
                400, 'missing_parameters',
                `You've already missed some parameters: ${unmetVariables}`
            ));
        }
        return Q.resolve();
    };

};
