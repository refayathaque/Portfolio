var mongoose = require('mongoose');

var User = mongoose.model('User');

function UsersController() {

    this.create = function(req, res) {
        User.findOne({email : req.body.email})
        .then((user) => {
            if(user) {
                res.json({error : true, messages : 'You are already registered'})
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
            console.log('Error in users.js controller')
        })
    }

}

module.exports = new UsersController();
