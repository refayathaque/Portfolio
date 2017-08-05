var users = require('../controllers/users.js')
var questions = require('../controllers/questions.js')
var answers = require('../controllers/answers.js')
// IMPORTANT TO HAVE ALL CONTROLLERS HERE!

module.exports = function(app) {

    app.post('/users', (req, res) => {
        console.log('REQ BODY : ', req.body)
        users.create(req, res)
    })

    app.post('/login', (req,res) => {
        console.log('REQ BODY : ', req.body)
        users.login(req, res)
    })

    app.post('/newquestions', (req, res) => {
        console.log('REQ BODY : ', req.body)
        questions.create(req, res)
    })

    app.post('/newanswers/:id', (req, res) => {
        console.log('REQ BODY : ', req.body)
        answers.create(req, res)
    })

    app.get('/index', (req,res) => {
        console.log("Inside Routes (Home)")
        console.log('REQ BODY : ', req.body)
        questions.showAllQuestions(req, res)
    })

    app.post('/answers/:id/like', (req,res)=>{
        console.log("inside routes")
        answers.like(req, res);
    })

    app.get('/questions/:id', (req,res)=>{
        console.log("Inside routes, getting answers sorted by likes for question with ID passed in")
        console.log(req.body)
        questions.show(req, res)
    })

}
