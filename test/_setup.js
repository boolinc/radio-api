'use strict';

var chai            = require("chai")
,   chaiAsPromised  = require("chai-as-promised");

chai.use(chaiAsPromised);
global.expect = chai.expect;

var booljs  = require('bool.js');

booljs('com.gentebool.radio', [ 'booljs-mongoose' ])
    .setServerLoader('booljs-express')
    .setDatabaseLoader('booljs-mongoose')
    .run();
