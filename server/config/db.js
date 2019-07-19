import mongoose from 'mongoose';

const dbUrl = process.env.MONGO_URI || 'mongodb://localhost:27017/react-redux-admin';

mongoose.connect(dbUrl, { useNewUrlParser: true, useCreateIndex: true }, () => {
   console.log(`Database connected successfully on ${dbUrl}`);
});

mongoose.connection.on("error", () => {
    console.log("Database connection error, please check your configration");
});

const getToken = (headers) => {
    if (headers && headers.authorization) {
        var parted = headers.authorization.split(' ');
        if (parted.length === 2) {
            return parted[1];
        } else {
            return null;
        }
    } else {
        return null;
    }
};