import React from 'react';
import { PropTypes } from 'react';
import Result from '../components/result';
import githubHelpers from '../utils/githubHelpers';

const ResultsContainer = React.createClass({
  getInitialState() {
    return {
      isLoading: true,
      scores: [],
    };
  },
  componentDidMount() {
    let players = this.props.location.state.playersInfo;
    githubHelpers.battle(players)
      .then(function(scores) {
        this.setState({
          scores: scores,
          isLoading: false
        })
      }.bind(this))
  },
  render() {
    return (
      <Result
        isLoading={this.state.isLoading}
        scores={this.state.scores}
        playersInfo={this.props.location.state.playersInfo}
      />
    )
  }
});

export default ResultsContainer;
