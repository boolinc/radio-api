'use strict';

module.exports = function (app, Schema) {
    var crud = new app.plugins.MongooseCrud();

    var userSchema = new Schema({
        _id: {
            type: String,
            required: true
        }
    });

    userSchema.plugin(crud);
    return userSchema;
};
