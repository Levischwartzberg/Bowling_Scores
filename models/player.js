const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  player: { type: String, required: true },
  scores: [
    {
      score: { type: Number, required: true },
      scoresheet: { type: String, required: true},
      date: { type: Date, default: Date.now }
    }
  ]
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
