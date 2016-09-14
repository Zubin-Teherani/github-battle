import axios from 'axios';

let url = 'http://api.github.com/users/'

let getUserData = function(user) {
  return axios.get(url + user)

  .catch(function (err) {
    console.log("Error getting user from github", err);
  });
};

function getRepos(username) {
  return axios.get(url +  username + '/repos');
}

function getTotalStars (repos) {
  return repos.data.reduce(function(prev, current) {
    return prev + current.stargazers_count;
  }, 0);
}

function getPlayerData(player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then(function(totalStars) {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    });
}

function calculateScores(players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ]
}

var githubHelpers = {

  getPlayersInfo: function(players) {
    return axios.all(players.map((player) => {
      return getUserData(player);
    }))

    .then(function(users) {
      return users.map(function(user) {
        return user.data;
      });
    })

    .catch(function(err) {
      console.log("Error with axios function", err);
    });
  },

  battle: function(players) {
    let playerOneData = getPlayerData(players[0]);
    let playerTwoData = getPlayerData(players[1]);

    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch(function (err) {console.log("Error in getPlayersInfo: ", err);});
  }
};

export default githubHelpers;
