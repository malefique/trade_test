/**
 * Created by Олег on 01.10.2016.
 */
'use strict';
var assert = require("assert");
var compress = require('../lib/compress');

describe('compress', function(){
    it('[1,2,3,4,5,6,7,8] -> "1-8"', function(){
        var c = new compress().run([1,2,3,4,5,6,7,8], function(d){
            assert.equal(d,'1-8');
        });
    });
    it('[1,3,4,5,6,7,8] -> "1,3-8"', function(){
        var c = new compress().run([1,3,4,5,6,7,8], function(d){
            assert.equal(d,'1,3-8');
        });
    });
    it('[1,3,4,5,6,7,8,10,11,12] -> "1,3-8,10-12"', function(){
        var c = new compress().run([1,3,4,5,6,7,8,10,11,12], function(d){
            assert.equal(d,'1,3-8,10-12');
        });
    });
    it('[1,2,3] -> "1-3"', function(){
        var c = new compress().run([1,2,3], function(d){
            assert.equal(d,'1-3');
        });
    });
    it('[1,2] -> "1,2"', function(){
        var c = new compress().run([1,2], function(d){
            assert.equal(d,'1,2');
        });
    });
    it('[1,2,4] -> "1,2,4"', function(){
        var c = new compress().run([1,2,4], function(d){
            assert.equal(d,'1,2,4');
        });
    });
    it('[1,2,4,5,6] -> "1,2,4-6"', function(){
        var c = new compress().run([1,2,4,5,6], function(d){
            assert.equal(d,'1,2,4-6');
        });
    });
    it('[1,2,3,7,8,9,15,17,19,20,21] -> "1-3,7-9,15,17,19-21"', function(){
        var c = new compress().run([1,2,3,7,8,9,15,17,19,20,21], function(d){
            assert.equal(d,'1-3,7-9,15,17,19-21');
        });
    });
    it('[1,2,3,4,5,6,100,1091,1999,2000,2001,2002] -> "1-6,100,1091,1999-2002"', function(){
        var c = new compress().run([1,2,3,4,5,6,100,1091,1999,2000,2001,2002], function(d){
            assert.equal(d,'1-6,100,1091,1999-2002');
        });
    });
    it('[1] -> "1"', function(){
        var c = new compress().run([1], function(d){
            assert.equal(d,'1');
        });
    });
    it('[1,3,5,7,9,11] -> "1,3,5,7,9,11"', function(){
        var c = new compress().run([1,3,5,7,9,11], function(d){
            assert.equal(d,'1,3,5,7,9,11');
        });
    });
});