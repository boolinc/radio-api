'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('com.gentebool.radio', [ 'booljs-mongoose' ])
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-mongoose')
    .run()
    .catch(function (err) {
        log.error(err);
    });
