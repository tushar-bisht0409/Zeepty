const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
    phone: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: false,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    mode: {
        type: String,
        require: true,
    }
});

userSchema.pre('save', function (next){
    var user = this;
    if(this.isModified("password") || this.isNew){
        bcrypt.genSalt(10, function(err,salt){
            if(err){
                return next(err);
            }
            bcrypt.hash(user.password, salt, function(err,hash){
                if(err){
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    }
    else {
        return next();
    }
});

userSchema.methods.comparePassword = function(passw, cb){
    bcrypt.compare(passw, this.password, function(err, isMatch){
        if(err){
            return cb(err);
        }
        cb(null, isMatch);
    });
};


module.exports = mongoose.model("Users", userSchema);
