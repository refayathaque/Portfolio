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

    app.get('/api/items/listUsers', (req,res) => {
        users.listUsers(req, res)
    })

    app.post('/api/items/addItem', (req, res) => {
        console.log('(ROUTES) ADDITEM REQ.BODY : ', req.body)
        items.addItem(req, res)
    })

    app.get('/api/items/getUserItems', (req, res) => {
        items.getUserItems(req, res)
    })

    app.get('/api/items/changeItemStatus/:id', (req, res) => {
        items.changeItemStatus(req, res)
    })

}
