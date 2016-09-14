import React from 'react';
import styles from '../styles/index';
import { PropTypes } from 'react';

const Loading = React.createClass({
  propTypes: {
      text: PropTypes.string,
      speed: PropTypes.number
  },

  getDefaultProps() {
    return {
      text: 'Loading',
      speed: 300
    }
  },

  getInitialState() {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    }
  },

  componentDidMount() {
    let stopper = this.originalText + '...'
    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }.bind(this), 300)
  },

  componentWillUnmount() {
    window.clearInterval(this.interval)
  },

  render() {
    return(
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
})

export default Loading;
