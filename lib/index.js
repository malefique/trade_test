/**
 * Created by Олег on 30.09.2016.
 */
'use strict';

var compress = require('./compress');

module.exports = function(array,callback){
    var c = new compress().run(array,function(result){
        callback(result);
    });
};