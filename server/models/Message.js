const {Schema, model} = require("mongoose");

const Message = new Schema({
    text: {type: String},
});

module.exports = model('Message', Message);
