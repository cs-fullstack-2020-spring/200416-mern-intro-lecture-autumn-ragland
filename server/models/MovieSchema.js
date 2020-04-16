let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let MovieSchema = new Schema(
    {
        title : String,
        yearReleased : Number
    }
);

module.exports = mongoose.model('movies200416', MovieSchema);