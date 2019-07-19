import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import User from './../models/User';
import settings from './settings';

module.exports = (passport) => {
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
    opts.secretOrKey = settings.secret;

    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        User.findOne({}, function (err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            }
            else {
                done(null, false);
            }
        });
    }));
};