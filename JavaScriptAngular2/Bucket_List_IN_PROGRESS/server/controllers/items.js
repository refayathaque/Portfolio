var mongoose = require('mongoose');

var User = mongoose.model('User');

var Item = mongoose.model('Item');

function ItemsController() {

    this.addItem = function(req, res) {
        console.log('(ITEMS CONTROLLER) REQ.BODY : ', req.body);
        Item.findOne({
            $or: [
                {title : req.body.title},
                {description: req.body.description}
            ]
        })
        .then((data) => {
            if(data) { // We need to FIRST check if 'data' returned anything from the query above or is null, only after checking to see if 'data' has a value can we go into it to do our title and description checks, if it's null the else statement gets run and we store the req.body data to our db
                if(data.title === req.body.title) {
                    console.log('(ITEMS CONTROLLER) TITLE ALREADY IN DB : ', data.title);
                    res.json({error : true, messages : 'Item previously added'})
                }
                if(data.description === req.body.description) {
                    console.log('(ITEMS CONTROLLER) DESCRIPTION ALREADY IN DB : ', data.description);
                    res.json({error : true, messages : 'Description previously added'})
                }
            }
            else {
                var item = new Item(req.body)
                item.save((err, item) => {
                    if(err) {
                        res.json({error : true, messages : 'Error with inserting data into db'})
                    }
                    else {
                        res.json({error : false, item : item})
                    }
                })
            }
        })
        .catch((err) => {
            console.log('(ITEMS CONTROLLER) .CATCH : ', err)
        })
    }
}

//     this.login = function(req, res) {
//         console.log('(USERS CONTROLLER) REQ.BODY : ', req.body);
//         User.findOne({email : req.body.email})
//         .then((user) => {
//             if(user === null) {
//                 console.log('(USERS CONTROLLER) EMAIL NOT MATCHED')
//                 res.json({error: true, messages: "You are not registered"})
//             }
//             else {
//                 console.log('(USERS CONTROLLER) EMAIL match : ', user.email)
//                 var validPassword = user.comparePassword(req.body.password)
//                 if(validPassword) {
//                     console.log('(USERS CONTROLLER) PASSWORD MATCH : ', user.password)
//                     req.session.user = user;
//                     console.log('(USERS CONTROLLER) SESSION DATA : ', req.session.user);
//                     res.json({error : false, user : user})
//                 }
//                 else {
//                     console.log('(USERS CONTROLLER) PASSWORD NOT MATCHED')
//                     res.json({error: true, messages: "Password is invalid"})
//                 }
//             }
//         })
//         .catch((err) => {
//             console.log('(USERS CONTROLLER) .CATCH : ', err)
//         })
//     }
//
//     this.logout = function(req, res) {
//         req.session.destroy()
//         res.json({})
//         // req.session.user = "";
//         console.log('(USERS CONTROLLER) REQ.SESSION DESTROYED, RETURNING {}')
//     }
//
//     this.getSession = function(req, res) {
//         if(req.session.user) {
//             res.json(req.session.user)
//         }
//         else {
//             res.json({})
//         }
//     }
//
//     this.listUsers = function(req, res) {
//         User.find({})
//         .then((data) => {
//             // console.log('All friends (UsersController) : ', data);
//             res.json({error : false, data : data})
//         })
//         .catch((err) => {
//             // console.log('Error in users.js controller', err)
//         })
//     }
// }

module.exports = new ItemsController();
