// Module mongoose for Dishes: Assignment 2, Task 1

// Grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Add the Currency type to the Mongoose Schema types
require('mongoose-currency').loadType(mongoose);
var Currency = mongoose.Types.Currency;
 
// Create a schema for comments
var commentSchema = new Schema({
	rating: {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	}
}, {
	timestamps: true
});

// Create a schema for dishes
var dishSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	image: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	label: {
		type: String,
		required: false,
		default: ""
	},
	price: {
		type: Currency,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	comments: [commentSchema]
},
{
	timestamps: true
});

// The schema is useless so far
// we need to create a model using it
var Dishes = mongoose.model('Dish', dishSchema);

// Make this available to our Node applications
module.exports = Dishes;

