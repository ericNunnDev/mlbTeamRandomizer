import React from 'react';
import { Route } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar';
import Scoreboard from './components/Scoreboard';
import Shuffle from './components/Shuffle';

const App = () => {

  return (
    <div className='App'>
      <NavBar />
      <Route 
        exact
        path='/'
        render={() => (
          <Scoreboard />
        )}
      />
      <Route
        path='/shuffle'
        render={() => (
          <Shuffle />
        )}
      />
    </div>
  );
}

export default App;
