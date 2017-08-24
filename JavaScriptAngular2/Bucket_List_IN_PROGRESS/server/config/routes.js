var users = require('../controllers/users.js')

var items = require('../controllers/items.js')
// var questions = require('../controllers/questions.js')
// var answers = require('../controllers/answers.js')
// HAVE ALL CONTROLLERS ABOVE!

module.exports = function(app) {

    app.post('/api/users/register', (req, res) => {
        console.log('(ROUTES) REGISTER REQ.BODY : ', req.body)
        users.register(req, res)
    })

    app.post('/api/users/login', (req, res) => {
        console.log('(ROUTES) LOGIN REQ.BODY : ', req.body)
        users.login(req, res)
    })


    app.get('/api/users/logout', (req, res) => {
        users.logout(req, res)
    })

    app.get('/api/users/getSession', (req, res) => {
        users.getSession(req, res)
    })

    // app.get('/api/items/getSession', (req, res) => {
    //     users.getSessionID(req, res)
    // })

    app.get('/api/items/listUsers', (req,res) => {
        users.listUsers(req, res)
    })

    app.post('/api/items/addItem', (req, res) => {
        console.log('(ROUTES) ADD ITEM REQ.BODY : ', req.body)
        items.addItem(req, res)
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
