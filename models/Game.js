var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({

    name: String,
    teamA: String,
    teamB: String,
    scoreA: Number,
    scoreB: Number,
    shotsA: Number,
    shotsB: Number,
    faulsA: Number,
    faulsB: Number,
    comments: [{value : String}]

});

module.exports = mongoose.model('Game', GameSchema);
