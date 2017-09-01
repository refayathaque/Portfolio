var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({

    title: {type: String, required: true, validate: {validator: function(value) { return /^[a-zA-Z0-9"()'?,./!$*-\s]{5,}$/.test(value);}, message: '{value} (ITEM MODEL) TITLE INVALID'}},

    description: {type: String, required: true, validate: {validator: function(value) { return /^[a-zA-Z0-9"()'?,./!$*-\s]{10,}$/.test(value);}, message: '{value} (ITEM MODEL) DESCRIPTION INVALID'}},

    _creator: {type: Schema.Types.ObjectId, ref: 'User'},

    _friend: {type: Schema.Types.ObjectId, ref: 'User'},

    status: {type: Boolean}

}, {timestamps: true});

var Item = mongoose.model('Item', ItemSchema);
