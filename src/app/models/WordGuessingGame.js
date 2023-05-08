const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordGuessingGame = new Schema(
    {
        enword: { type: String },
        viword: { type: String },
    }
);

module.exports = mongoose.model('WordGuessingGame', WordGuessingGame);
