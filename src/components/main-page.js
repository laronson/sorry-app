import React, {Component} from 'react';
import Board from './board.js'

class MainPage extends Component {

  render() {
    return (
      <div id="main-page">
        <div className="side-of-board"/>
        <Board/>
        <div className="side-of-board"/>
      </div>
    )
  }
}

export default MainPage;
