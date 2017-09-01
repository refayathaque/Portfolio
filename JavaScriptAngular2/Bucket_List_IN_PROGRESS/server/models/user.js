var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({

    email: {type: String, required: true, validate: {validator: function(value) { return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/.test(value);}, message: '{value} (USER MODEL) EMAIL INVALID'}},

    password: {type: String, required: true, validate: {validator: function(value) { return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/.test(value);}, message: '{value} (USER MODEL) PASSWORD INVALID'}},

    username: {type: String, required: true, validate: {validator: function(value) { return /^[a-zA-Z]{8,}$/.test(value);}, message: '{value} (USER MODEL) USERNAME INVALID'}},

    date_of_birth: {type: Date, required: true},

    items: [{type: Schema.Types.ObjectId, ref: 'Item'}]

}, {timestamps: true});

// Bcrypt password hashing
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
