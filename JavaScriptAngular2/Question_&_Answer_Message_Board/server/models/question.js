var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    content: {type: String, required: true, minlength: 10},
    description: {type: String, required: false},
    created_by: {type: String, required: true},
    answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}]
}, {timestamps: true});

var Question = mongoose.model('Question', QuestionSchema);
