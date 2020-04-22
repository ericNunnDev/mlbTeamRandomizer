import React from 'react';
import './App.scss';
import NavBar from './components/NavBar';
import Scoreboard from './components/Scoreboard';
import Button from '@material-ui/core/Button';

function App() {
  const teams = ['Baltimore Orioles', 'Boston Red Sox', 'New York Yankees', 'Tampa Bay Rays', 'Toronto Blue Jays', 'Chicago White Sox', 'Cleveland Indians', 'Detroit Tigers', 'Kansas City Royals', 'Minnesota Twins', 'Houston Astros', 'Los Angeles Angels', 'Oakland Athletics', 'Seattle Mariners', 'Texas Rangers', 'Atlanta Braves', 'Miami Marlins', 'New York Mets', 'Philadelphia Phillies', 'Washington Nationals', 'Chicago Cubs', 'Cincinnati Reds', 'Milwaukee Brewers', 'Pittsburgh Pirates', 'St. Louis Cardinals', 'Arizona Diamondbacks', 'Colorado Rockies', 'Los Angeles Dodgers', 'San Diego Padres', 'San Francisco Giants'];

  function shuffle(list) {
    let ctr = list.length;
    let temp;
    let i;

    while (ctr > 0) {
      i = Math.floor(Math.random() * ctr);
      ctr--;

      temp = list[ctr];
      list[ctr] = list[i];
      list[i] = temp;
    }
    return list;
  }

  console.log(shuffle(teams))

  return (
    <div className='App'>
      <NavBar />
      <Scoreboard />
    </div>
  );
}

export default App;
