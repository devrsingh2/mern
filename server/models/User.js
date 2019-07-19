import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// If you set the password, be sure to hash it using bcrypt before saving
UserSchema.pre('save', function(next) {
    if (this.isModified('password')) {
        return bcrypt.hash(this.password, 8, (err, hash) => {
            if (err) {
                return next(err);
            }
            this.password = hash;
            next();
        });
    }
    next();
});

UserSchema.methods.comparePassword = function(pass, cb) {
    bcrypt.compare(pass, this.password, (err, isMatch) => {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model("User", UserSchema);