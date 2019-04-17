import React, {Component} from 'react';
import {connect} from 'react-redux';
import {movePiece, setMoveNumber} from '../actions/board-actions.js'

class Square extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  //
  // shouldComponentUpdate(nextProps, nextState) {
  //   if(this.nextState)
  // }

  showPiece() {
    console.log(this.props.pieceLocations[this.props.id])
    if(this.props.pieceLocations[this.props.id]) {
      //this.setState({showingPiece: true})
      return this.props.pieceLocations[this.props.id]
    }
  }

  handleClick() {
    if(this.props.moveNumber > 0){
      if(this.props.pieceLocations[this.props.id]) {

        var newPieceLocation
        if(this.props.id==59) {
          newPieceLocation = 0
        } else {
          newPieceLocation = this.props.id + 1;
        }

        var pieceVal = this.props.pieceLocations[this.props.id]
        var newLocations = this.props.pieceLocations.slice();

        newLocations[this.props.id] = false;
        newLocations[newPieceLocation] = pieceVal;

        console.log(newLocations)

        this.props.dispatch(movePiece(newLocations));
        this.props.dispatch(setMoveNumber(this.props.moveNumber-1))

      }
    }
  }

  render() {
    return(
      <div id={this.props.id} className={this.props.className} onClick={() => {this.handleClick()}}>{this.showPiece()}</div>
    )
  }
}

function mapStateToProps(state) {
  return state.BoardReducer;
}

export default connect(mapStateToProps)(Square);
