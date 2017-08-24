var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    title: {type: String, required: true, validate: {validator: function(value) { return /^[a-zA-Z0-9]{5,}$/.test(value);}, message: '{value} (ITEM MODEL) TITLE INVALID'}},
    description: {type: String, required: true, validate: {validator: function(value) { return /^[a-zA-Z0-9]{10,}$/.test(value);}, message: '{value} (ITEM MODEL) DESCRIPTION INVALID'}},



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
