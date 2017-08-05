var mongoose = require('mongoose');

var AnswerSchema = new mongoose.Schema({
    content: {type: String, required: [true, 'Answer is required!'], minlength: [5, 'Answer must be at least 5 characters long!']},
    detail: {type: String, required: true},
    created_by: {type: String, required: true},
    likes: {type: Number, default: 0},
    _questions: {type: mongoose.Schema.Types.ObjectId, ref: 'Question'}
}, {timestamps: true});

AnswerSchema.methods.like = function(callback) {
    this.likes += 1;
    this.save(function(err) {
        callback(err);
    });
}

var Answer = mongoose.model('Answer', AnswerSchema);
