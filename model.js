/**
 * Created by BSY on 2017/3/26.
 */
let mongoose = require('mongoose');
mongoose.Promise = Promise;

mongoose.connect('mongodb://127.0.0.1/movies');
let MovieSchema = new mongoose.Schema({
	name:String,
	url:String
});

exports.Movie = mongoose.model('Movie',MovieSchema);