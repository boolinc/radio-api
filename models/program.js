'use strict';

module.exports = function (app, Schema) {
    var crud = new app.plugins.MongooseCrud();

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
            { type: String, ref: 'User' }
        ]
    });

    programSchema.plugin(crud);
    return programSchema;

};
