import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setMoveNumber} from '../actions/board-actions.js'

class MiddleBoard extends Component {

  pick() {
    console.log("pick")
    this.props.dispatch(setMoveNumber(5));
  }

  render() {
    return (
      <div id="center-square">
        <div id="blue-home" className="player-section side-player-section">
        </div>
        <div id="center-center">
          <div id="green-home" className="player-section down-player-section">
          </div>
          <div id="deck-section">
            THis is the deck
          </div>
          <div id="yellow-home" className="player-section down-player-section">
          </div>
        </div>
        <div id="red-home" className="player-section side-player-section">
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.BoardReducer;
}

export default connect(mapStateToProps)(MiddleBoard);
