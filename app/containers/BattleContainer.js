import React from 'react';
import Battle from "../components/battle";
import githubHelpers from "../utils/githubHelpers";

const BattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState() {
    return {
      isLoading: true,
      playersInfo: []
    }
  },

  componentDidMount () {
    let query = this.props.location.query;
    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function(players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
  },

  handleInitiateBattle() {
    this.context.router.push({
      pathname: '/results',
      state: {
        playersInfo: this.state.playersInfo
      }
    })
  },

  render(){
    return(
      < Battle
        isLoading={this.state.isLoading}
        onInitialBattle={this.handleInitiateBattle}
        playersInfo={this.state.playersInfo}
      />
    )
  }
})

export default BattleContainer;
