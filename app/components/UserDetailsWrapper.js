import React from 'react';
import { PropTypes } from 'react';

function UserDetailsWrapper(props) {
  return (
    <div className='col-sm-6'>
      <h2 className="lead">{props.header}</h2>
      {props.children}
    </div>
  )
}

UserDetailsWrapper.propTypes = {
  header: PropTypes.string.isRequired
}

export default UserDetailsWrapper;
