const users = require('../controllers/users.js')

const items = require('../controllers/items.js')

// HAVE ALL CONTROLLERS ABOVE!

module.exports = function(app) {

    app.post('/api/users/register', (req, res) => {
        console.log('(ROUTES) [REGISTER] REQ.BODY : ', req.body)
        users.register(req, res)
    })

    app.post('/api/users/login', (req, res) => {
        console.log('(ROUTES) [LOGIN] REQ.BODY : ', req.body)
        users.login(req, res)
    })

    app.get('/api/users/getSession', (req, res) => {
        users.getSession(req, res)
    })

    app.get('/api/users/getFriendData/:id', (req, res) => {
        users.getFriendData(req, res)
    })

    app.get('/api/users/listUsers', (req,res) => {
        users.listUsers(req, res)
    })

    app.get('/api/users/logout', (req, res) => {
        users.logout(req, res)
    })

    app.post('/api/items/addItem', (req, res) => {
        console.log('(ROUTES) [ADD ITEM] REQ.BODY : ', req.body)
        items.addItem(req, res)
    })

    app.get('/api/items/changeItemStatus/:id', (req, res) => {
        items.changeItemStatus(req, res)
    })

    app.get('/api/items/getUserItems', (req, res) => {
        items.getUserItems(req, res)
    })

    app.get('/api/items/getFriendItemsPending/:id', (req, res) => {
        items.getFriendItemsPending(req, res)
    })

    app.get('/api/items/getFriendItemsDone/:id', (req, res) => {
        items.getFriendItemsDone(req, res)
    })

    app.put('/api/items/updateItem/:id', (req, res) => {
        console.log('(ROUTES) [UPDATE ITEM] REQ.BODY : ', req.body)
        items.updateItem(req, res)
    })

}
