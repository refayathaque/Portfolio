const mongoose = require('mongoose');
const User = mongoose.model('User');

function UsersController() {

    this.create = function(req, res) {
        console.log("Inside controller (Registration)")
        User.findOne({email: req.body.email})
        .then((user) => {
            console.log(user)
            if(user) {
                res.json({error: true, messages: 'You are already registered!'})
            } else {
                var user = new User(req.body)
                user.save((err, user) => {
                    console.log('User created!')
                    if(err) {
                        res.json({error: true, messages: err.errors.email.message})
                    } else {
                        res.json({error: false, user: user})
                    }
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }

    this.login = function(req, res) {
        console.log("Inside controller (Login)")
        console.log(req.body)
        User.findOne({username: req.body.username}, function(err, user) {
            if(err) {
                console.log(err)
            } else if(user) {
                console.log("User in DB", user)
                var validPassword = user.comparePassword(req.body.password)
                if(validPassword) {
                    res.json({login: true, user: user})
                } else {
                        res.json({login: false, error: "Invalid password!"})
                    }
                } else {
                    console.log("User NOT in DB")
                    res.json({login: false, error: "Username not found!"})
                }
            })
        }

}

module.exports = new UsersController();
