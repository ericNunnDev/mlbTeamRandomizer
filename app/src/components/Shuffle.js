import React from 'react';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import Typography from '@material-ui/core/Typography';

const Shuffle = () => {
    const teams = [' Baltimore Orioles', ' Boston Red Sox', ' New York Yankees', ' Tampa Bay Rays', ' Toronto Blue Jays', ' Chicago White Sox', ' Cleveland Indians', ' Detroit Tigers', ' Kansas City Royals', ' Minnesota Twins', ' Houston Astros', ' Los Angeles Angels', ' Oakland Athletics', ' Seattle Mariners', ' Texas Rangers', ' Atlanta Braves', ' Miami Marlins', ' New York Mets', ' Philadelphia Phillies',  ' Washington Nationals', ' Chicago Cubs', ' Cincinnati Reds', ' Milwaukee Brewers', ' Pittsburgh Pirates', ' St. Louis Cardinals', ' Arizona Diamondbacks', ' Colorado Rockies', ' Los Angeles Dodgers', ' San Diego Padres', ' San Francisco Giants'];

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
      console.log(teams)
      return list;
    }

    return (
        <div>
            <Box m={5}>
                <Fab className='shuffle__btn' variant='extended' color='primary' aria-label='shuffle' onClick={() => shuffle(teams)}>
                    <Typography variant='h6' component='h1'>Shuffle</Typography>
                    <ShuffleIcon />
                </Fab>
                </Box>
        </div>
    )
}

export default Shuffle;