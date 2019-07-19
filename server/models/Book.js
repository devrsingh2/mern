import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    isbn: {
        type: String,
        required: true,
        trim: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    published_date: {
        type: Date,
        default: Date.now()
    },
    publisher: {
        type: String
    },
    updated_date: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Book", BookSchema);