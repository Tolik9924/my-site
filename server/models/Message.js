const {Schema, model} = require("mongoose");

const Message = new Schema({
    text: {type: String},
    complete: {type: Boolean, default: false},
    edit: {type: Boolean, default: false}
});

module.exports = model('Message', Message);
