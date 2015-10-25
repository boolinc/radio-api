'use strict';
var booljs = require('bool.js');

// Here is where magic happens
booljs('com.gentebool.radio')
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-nomodel')
    .run();
