var mongoose = require('mongoose');

var User = mongoose.model('User');

function UsersController() {

    this.register = function(req, res) {
        console.log('(USERS CONTROLLER) REQ.BODY : ', req.body);
        User.findOne({
            $or: [
                {email : req.body.email},
                {username: req.body.username}
            ]
        })
        .then((user) => {
            if(user) { // We need to FIRST check if 'user' returned anything from the query above or is null, only after checking to see if 'user' has a value can we go into it to do our email and username checks, if it's null the else statement gets run and we store the req.body data to our db
                if(user.email === req.body.email) {
                    console.log('(USERS CONTROLLER) EMAIL ALREADY IN DB : ', user.email);
                    res.json({error : true, messages : 'You are already registered'})
                }
                if(user.username === req.body.username) {
                    console.log('(USERS CONTROLLER) USERNAME ALREADY IN DB : ', user.username);
                    res.json({error : true, messages : 'Username already in use'})
                }
            }
            else {
                var user = new User(req.body)
                user.save((err, user) => {
                    if(err) {
                        res.json({error : true, messages : 'Error with inserting data into db'})
                    }
                    else {
                        req.session.user = user;
                        console.log('(USERS CONTROLLER) SESSION USER : ', req.session.user);
                        res.json({error : false, user : user})
                    }
                })
            }
        })
        .catch((err) => {
            console.log('(USERS CONTROLLER) .CATCH : ', err)
        })
    }

    this.login = function(req, res) {
        console.log('Data being sent from Routes to Controller : ', req.body)
        User.findOne({email : req.body.email})
        .then((user) => {
            console.log('HHFJKDSHFKJAHSDF', user)
            if(user === null) {
                console.log('EMAIL NOT MATCHED')
                res.json({error: true, messages: "You are not registered"})
            } // WTFFFFFF
            if(user.email === req.body.email) {
                console.log('EMAIL match ', user.email)
                var validPassword = user.comparePassword(req.body.password)
                if(validPassword) {
                    console.log('PASSWORD match ', user.password)
                    res.json({login: true, user: user})
                    req.session.user = user;
                    console.log('User session ID (LOGIN) in UsersController : ', req.session.user);
                }
                else {
                    console.log('PASSWORD NOT MATCHED')
                    res.json({error: true, messages: "Password is invalid"})
                }
            }
        })
        .catch((err) => {
            console.log('(USERS CONTROLLER) .CATCH : ', err)
        })
    }


    this.logout = function(req, res) {
        req.session.destroy
        console.log(req.session)
    }

    this.getSessionID = function(req, res) {
        res.json(req.session.user)
    }

    this.showAllUsers = function(req, res) {
        User.find({})
        .then((data) => {
            // console.log('All friends (UsersController) : ', data);
            res.json({error : false, data : data})
        })
        .catch((err) => {
            // console.log('Error in users.js controller', err)
        })
    }
}

module.exports = new UsersController();
