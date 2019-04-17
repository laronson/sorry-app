import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import {Provider} from 'react-redux'
import configureStore from './store.js'
import MainPage from './components/main-page.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={configureStore()}>
          <MainPage/>
        </Provider>
      </div>
    );
  }
}

export default App;
