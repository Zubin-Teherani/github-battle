import React from 'react';
import { PropTypes } from 'react';
import styles from '../styles/index';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import {Link} from 'react-router';
import MainContainer from './MainContainer';
import Loading from './loading';

function StartOver() {
  return(
    <div className="col-sm-12 text-center" style={styles.space}>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

const Result = function(props) {
  if (props.isLoading === true) {
    return(
      <Loading/>
    )
  }


  if (props.scores[0] === props.scores[1]) {
    return(
      <MainContainer>
        <header>It's a tie!</header>
        <StartOver />
      </MainContainer>
    );
  }

  let winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  let losingIndex = props.scores[0] < props.scores[1] ? 0 : 1;
  return(
    <MainContainer>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner" >
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser" >
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  )
};

Result.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default Result;
