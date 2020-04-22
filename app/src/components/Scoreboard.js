import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import '../App.scss';

function Scoreboard() {
    const [ericScore, setEricScore] = useState(0);
    const [timScore, setTimScore] = useState(0);

    return (
        <div>
            <section className='scoreboard'>
                <h1 className='game'>The Show</h1>
            <div className='topRow'>
                <div className='home'>
                    <h2 className='home__name'>Eric</h2>
                    <div className='home__score'>{ericScore}</div>
                </div>
          <div className='away'>
            <h2 className='away__name'>Tim</h2>
            <div className='away__score'>{timScore}</div>
          </div>
        </div>
        </section>
        <section className='buttons'>
          <Button
            variant='contained'
            color='primary'
            onClick={() => setEricScore(ericScore + 1)} 
            >
            Eric Wins
          </Button>        
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setTimScore(timScore + 1)}
           >
            Tim Wins
          </Button>
        </section>   
        </div>
    )
}

export default Scoreboard;