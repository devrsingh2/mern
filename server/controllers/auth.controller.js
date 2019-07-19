import User from './../models/User';
import jwt from 'jsonwebtoken';

import settings from './../config/settings';

exports.signup = (req, res) => {
    if (!req.body.name || !req.body.username || !req.body.email || !req.body.password) {
        res.json({
            success: false, msg: 'Please enter all required field(s).'
        });
    }
    else {
        const newUser = new User;
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.username = req.body.username;
        newUser.password = req.body.password;
        newUser.phone = (req.body.phone) ? req.body.phone : '';
        // console.log(user); return;
        newUser.save(function (err, user) {
            if (err) {
                return res.json({success: false, msg: 'Username already exists.'});
            }
            res.json({success: true, msg: 'Successful created new user.'});
        });
    }
};

exports.login = (req, res) => {
    User.findOne({
        username: req.body.username
    }, (err, user) => {
        if (err) {
            throw err;
        }
        if (!user) {
            res.status(401).send({success: false, msg: 'Authentication failed. User not found.'});
        }
        else {
            //check if password match
            user.comparePassword(req.body.password, (err, isMatch) => {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    const token = jwt.sign(user.toJSON(), settings.secret);
                    // return the information including token as JSON
                    res.json({
                        success: true,
                        token: 'JWT ' + token
                    });
                }
                else {
                    res.status(401).send({
                        success: false,
                        msg: 'Authentication failed. Wrong password.'
                    });
                }
            });
        }
    });
};