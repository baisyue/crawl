/**
 * Created by BSY on 2017/3/26.
 */
let Movie = require('../model').Movie;
let async = require('async');
var debug = require('debug');
var logger = debug('crawl:write');
module.exports = function(movies,callback){
	async.forEach(movies,function(movie,cb){
		Movie.create(movie,cb);
		logger(`写入电影：${movie.name}`);
	},callback);
};