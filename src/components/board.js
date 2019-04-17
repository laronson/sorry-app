import React, {Component} from 'react';
import {connect} from 'react-redux'
import Square from './square.js'
import MiddleBoard from './middle-board.js'
import {movePiece} from '../actions/board-actions.js'

class Board extends Component {

  componentDidMount() {
    var newLocations = this.props.pieceLocations.slice()
    newLocations[40] = "R1"
    this.props.dispatch(movePiece(newLocations))
  }

  generateSquareId(operator, a, b) {
    if(operator == '+') {
      return a+b
    } else {
      return b-a
    }
  }

  generateSideSquares(num, operator) {
    var i;
    var squares = []

    for(i=0;i<16;i++) {
      if(i==4 || i==13) {
        squares.push(<Square id={this.generateSquareId(operator, i, num)} className="square"/>)
      } else {
        squares.push(<Square id={this.generateSquareId(operator, i, num)} className="square"/>)
      }
    }

    return squares
  }

  generateDownRows(num, operator) {
    var i;
    var squares = []

    for(i=0;i<14;i++) {
      squares.push(<Square id={this.generateSquareId(operator, i, num)} className="sideSquare"/>)
    }

    return squares
  }

  render() {
    return (
      <div id="board">
        <div id="top-row" className="sideRow">
          {this.generateSideSquares(0, '+')}
        </div>
        <div className="middle-board">
          <div id="left-row" className="downRow">
            {this.generateDownRows(59, '-')}
          </div>
          <MiddleBoard/>
          <div id="right-row" className="downRow">
            {this.generateDownRows(16, '+')}
          </div>
        </div>
        <div id="bottom-row" className="sideRow">
          {this.generateSideSquares(45, '-')}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state.BoardReducer;
}

export default connect(mapStateToProps)(Board);
