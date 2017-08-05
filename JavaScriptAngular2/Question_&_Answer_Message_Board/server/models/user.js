var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    birthdate: {type: Date, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true, validate: {validator: function(value) { return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);}, message: '{value} is not a valid email address!'}},
    password: {type: String, required: true, validate: {validator: function(value) { return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/.test(value);}, message: '{value} is not a valid email address!'}},
    confirmpassword: {type: String, required: true}
}, {timestamps: true});

// Bcrypt Password Hashing
UserSchema.methods.generateHash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
}
UserSchema.pre('save', function(done){
    this.password = this.generateHash(this.password);
    done()
})

var User = mongoose.model('User', UserSchema);
