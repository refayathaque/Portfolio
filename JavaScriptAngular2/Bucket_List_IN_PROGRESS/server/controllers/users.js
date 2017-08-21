var mongoose = require('mongoose');

var User = mongoose.model('User');

function UsersController() {

    this.create = function(req, res) {

        // User.findOne({email : req.body.email}, function(err, user){
        //
        // })

        console.log('Data being sent from Routes to Controller : ', req.body);

        User.findOne({
            $or: [
                {email : req.body.email},
                {username: req.body.username}
            ]
        })
        .then((user) => {
            if(user) {
                if(user.email === req.body.email) {
                    console.log('EMAIL', user.email);
                    res.json({error : true, messages : 'You are already registered'})
                }
                if(user.username === req.body.username) {
                    console.log('USERNAME', user.username);
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
                        res.json({error : false, user : user})
                    }
                })
            }
        })
        .catch((err) => {
            console.log('Error in users.js controller', err)
        })
    }

}

module.exports = new UsersController();
