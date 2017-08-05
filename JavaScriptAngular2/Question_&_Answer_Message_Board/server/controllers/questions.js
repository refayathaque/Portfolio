const mongoose = require('mongoose');
const Question = mongoose.model('Question');

function QuestionsController() {

    this.showAllQuestions = function(req, res) {
        Question.find({})
        .populate('answers')
        .exec(function(err, questions) {
            if(err) {
                console.log(err)
            } else {
                res.json(questions)
            }
        })
    }

    this.show = function(req, res){
    var question_id = req.params.id
    Question.findOne({_id:question_id})
    .populate({
        path: 'answers',
        options: { sort: {'likes': '-1'}}
    })
    // http://quabr.com/44231362/mongoose-express-sort-items-order-with-populate-function Where I learned how to do the sort
    .exec(function(err, question){
      if(err){
        console.log(err)
      }
      else{
        res.json(question)
      }
    })
    }

    this.create = function(req, res) {
        console.log("Inside questions controller")
        Question.findOne({content: req.body.content})
        .then((content) => {
            console.log(req.body.content)
            console.log(req.body.description)
            console.log(req.body.created_by)
            if(content) {
                res.json({error: true, messages: 'This question has already been submitted!'})
            } else {
                var question = new Question(req.body)
                question.save((err, question) => {
                    console.log('Question created!')
                    if(err) {
                        res.json({error: true, messages: 'Question NOT submitted!'})
                    } else {
                        res.json({error: false, messages: 'Question submitted!'})
                    }
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

}

module.exports = new QuestionsController();
