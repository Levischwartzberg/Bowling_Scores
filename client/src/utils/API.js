import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all phrases/insults
  newPlayer: function() {
    return axios.post("/api/players")
  },
  getPlayers: function() {
    return axios.get("/api/players")
  },
  getUserScores: function() {
    return axios.get("/api/players/:id")
  },
  newScore: function(scoreData) {
    return axios.put("/api/players/:id", scoreData)
  }
  // require in this file as something like this 
  // import API from "../../utils/API";

  // API.newHighscore(data) will post the new highscore
}
