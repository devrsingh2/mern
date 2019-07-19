import Book from './../models/Book';

exports.getBooks = (req, res, next) => {
    var token = getToken(req.headers);
    if (token) {
        Book.find(function (err, books) {
            if (err) next(err);
            if (books) {
                res.json(books);
            }
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};

exports.addBook = (req, res, next) => {
    var token = getToken(req.headers);
    if (token) {
        const book = new Book;
        book.isbn = req.body.isbn;
        book.title = req.body.title;
        book.author = req.body.author;
        book.description = req.body.description;
        book.save(function (err, results) {
            if (err) next(err);
            if (results) {
                res.json(results);
            }
        });
    } else {
        return res.status(403).send({success: false, msg: 'Unauthorized.'});
    }
};