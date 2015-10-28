'use strict';

module.exports = function (app, Schema) {
    /* global q */ var Q = q;

    var programSchema = new Schema({
        _id: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        hosts: [
            { type: String, ref: 'Host' }
        ]
    });

    programSchema.statics.list = function () {
        return Q.nbind(this.find, this)();
    };

    return programSchema;

};
