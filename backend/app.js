const express = require('express');
const mongoose = require('mongoose');
const config = require('./utils/config');
const app = express();

console.log("Connecting to mongodb database...")
mongoose.connect(config.MONGO_URI)
        .then(() => {
            console.log("Connected to mongodb")
        })
        .catch(error => {
            console.log(`Error connection to mongodb database ${error}`)
        })

module.exports = app