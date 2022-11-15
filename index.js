const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config();
app.use('/api', routes)

mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true }, (error, response) => {
    if(error){
        return console.log(`Error connecting to database  ${error}`);
    }
    console.log("Database connection established")
    app.listen(process.env.PORT, (error) => {
        if(error){
            console.log(`Error Starting Server on port ${process.env.PORT}`);
        }
        console.log(`Server started on port ${process.env.PORT}`);
    });
});








