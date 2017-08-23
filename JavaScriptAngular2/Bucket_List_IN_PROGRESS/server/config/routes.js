var users = require('../controllers/users.js')
// var questions = require('../controllers/questions.js')
// var answers = require('../controllers/answers.js')
// HAVE ALL CONTROLLERS ABOVE!

module.exports = function(app) {

    app.post('/register', (req, res) => {
        console.log('(ROUTES) REGISTER REQ.BODY : ', req.body)
        users.register(req, res)
    })

    app.post('/login', (req, res) => {
        console.log('Login data in req.body : ', req.body)
        users.login(req, res)
    })

    app.get('/dashboard', (req, res) => {
        users.getSessionID(req, res)
    })

    app.get('/getFriends', (req,res) => {
        users.showAllUsers(req, res)
    })

    app.get('/logout', (req, res) => {
        console.log('(ROUTES) LOGOUT REQ.BODY : ', req.body)
        users.logout(req, res)
    })

    //
    // app.post('/login', (req,res) => {
    //     console.log('REQ BODY : ', req.body)
    //     users.login(req, res)
    // })
    //
    // app.post('/newquestions', (req, res) => {
    //     console.log('REQ BODY : ', req.body)
    //     questions.create(req, res)
    // })
    //
    // app.post('/newanswers/:id', (req, res) => {
    //     console.log('REQ BODY : ', req.body)
    //     answers.create(req, res)
    // })
    //
    // app.get('/index', (req,res) => {
    //     console.log("Inside Routes (Home)")
    //     console.log('REQ BODY : ', req.body)
    //     questions.showAllQuestions(req, res)
    // })
    //
    // app.post('/answers/:id/like', (req,res)=>{
    //     console.log("inside routes")
    //     answers.like(req, res);
    // })
    //
    // app.get('/questions/:id', (req,res)=>{
    //     console.log("Inside routes, getting answers sorted by likes for question with ID passed in")
    //     console.log(req.body)
    //     questions.show(req, res)
    // })

}
