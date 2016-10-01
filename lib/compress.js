/**
 * Created by Олег on 01.10.2016.
 */
'use strict';

var compress = function(){
    this.options = {
      step: 3
    };
    this.tmp = {
        first_index: -1,
        temp: [],
        seq: []
    };
    
    return this;
};

compress.prototype.run = function (a,callback) {
    for(var i in a){
        if(this.tmp.first_index == -1){
            this.tmp.first_index = i;
        }
        else{
            if(a[i] - a[i-1] != 1){
                if(i-this.tmp.first_index == 1)
                    this.tmp.temp.push(this.tmp.seq[0]);
                else if(i-this.tmp.first_index<this.options.step)
                    Array.prototype.push.apply(this.tmp.temp, this.tmp.seq);
                else{
                    if(this.tmp.seq.length == 1)
                        this.tmp.temp.push(a[this.tmp.first_index]);
                    else if(this.tmp.seq.length >= this.options.step)
                        this.tmp.temp.push(a[this.tmp.first_index]+'-'+this.tmp.seq[this.tmp.seq.length-1]);
                    else
                        Array.prototype.push.apply(this.tmp.temp, this.tmp.seq);
                }


                this.tmp.first_index = i;
                this.tmp.seq = [];
            }
        }
        this.tmp.seq.push(a[i]);
        if(i == a.length - 1){
            if(this.tmp.seq.length == 1)
                this.tmp.temp.push(a[this.tmp.first_index]);
            else if(this.tmp.seq.length >= this.options.step)
                this.tmp.temp.push(a[this.tmp.first_index]+'-'+this.tmp.seq[this.tmp.seq.length-1]);
            else
                Array.prototype.push.apply(this.tmp.temp, this.tmp.seq);
            callback(this.tmp.temp.join(','));
        }
    }
    return this;
};

module.exports = compress;