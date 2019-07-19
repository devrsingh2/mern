import express from 'express';
import passport from 'passport';
import configPassport from './../config/passport';
configPassport(passport);

import { getBooks, addBook } from './../controllers/book.controller';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false}), getBooks);

router.post('/add', passport.authenticate('jwt', { session: false}), addBook);

module.exports = router;