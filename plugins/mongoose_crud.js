'use strict';

module.exports = function () {
    /* global q */ var Q = q;

    return function (schema) {

        schema.statics.list = function () {
            return Q.nbind(this.find, this)();
        };

        schema.statics.findById = function (id) {
            return Q.nbind(this.findOne, this)({ _id: id });
        };

        schema.statics.insert = function (data) {
            return Q.nbind(this.create, this)(data);
        };

        schema.statics.update = function (id, data) {
            return Q.nbind(this.findOne, this)({
                _id: id
            }).then(function (_field) {
                for(var key in data){
                    if(Object.hasOwnProperty(key))
                        _field[key] = data[key];
                }
                return Q.nbind(_field.save, _field)();
            });
        };

    };
};
