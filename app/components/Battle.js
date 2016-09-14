import React from "react";
import styles from '../styles/index';
import { PropTypes } from "react";
import UserDetailsWrapper from "./UserDetailsWrapper";
import UserDetails from "./UserDetails";
import {Link} from "react-router";
import MainContainer from './MainContainer';
import Loading from './Loading';

function Battle(props) {
    return (
      props.isLoading === true
      ?   <Loading speed={500} text="Yo what up" />
      :   <MainContainer>
            <h1>Confirm Players</h1>
            <div className="col-sm-8 col-sm-offset-2">
              <UserDetailsWrapper header="Player 1" >
                <UserDetails info={props.playersInfo[0]} />
              </UserDetailsWrapper>
              <UserDetailsWrapper header="Player 2">
                <UserDetails info={props.playersInfo[1]} />
              </UserDetailsWrapper>
            </div>
          <div className="col-sm-8 col-sm-offset-2">
            <div className="col-sm-12" style={styles.space} >
              <button type="button" className="btn btn-lg btn-success" onClick={props.onInitialBattle}>Initiate Battle</button>
            </div>
            <div className="col-sm-12" style={styles.space} >
              <Link to="/playerOne">
                <button type="button" className="btn btn-lg btn-danger">Reselect Players</button>
              </Link>
            </div>
          </div>
        </MainContainer>
    )
}

Battle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitialBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default Battle;
