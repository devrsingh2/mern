import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';

import './config/db';

import auth from './routes/auth';
import book from './routes/book';

dotenv.config();

const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));
//register route
app.use('/api/auth', auth);
app.use('/api/book', book);

//handle 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});


/*app.get('/', (req, res) => {
   res.send("Hi from node");
});*/

const port = process.env.PORT || 8081;

// app.listen(port, () => {
//     console.log(`App is running on port ${port}`);
// });