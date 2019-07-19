import express from 'express';
import passport from 'passport';
import configPassport from './../config/passport';
configPassport(passport);

import { signup, login } from './../controllers/auth.controller';

const router = express.Router();

router.post('/register', signup);

router.post('/login', login);

module.exports = router;