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
            if(user) { // We need to FIRST check if 'user' returned anything from the query above or is null, only after checking to see if 'user' has a value can we go into it to do our email and username checks, if it's null the else statement gets run and we store the req.body data to our db
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
                        req.session.id = user._id;
                        console.log('User session ID : ', req.session.id);
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