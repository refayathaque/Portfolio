const users = require('../controllers/users.js')

const items = require('../controllers/items.js')

const path = require('path');

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

    app.put('/api/items/update/:id', (req, res) => {
        console.log('(ROUTES) [UPDATE] REQ.BODY : ', req.body)
        items.update(req, res)
    })

    // app.put('/api/items/update/:id', items.update) // Simplified form

    app.delete('/api/items/delete/:id', (req, res) => {
        console.log('(ROUTES) [DELETE] REQ.PARAMS.ID : ', req.params.id);
        items.delete(req, res)
    })

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    });

}
