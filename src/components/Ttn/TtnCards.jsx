
import PropTypes from 'prop-types';

import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Grid,
    ListItem,
    Typography,
  } from '@mui/material';
  

const TtnCards =({
    ttn,
    onTtnListClickHandler,
    onTtnDeleteClickHandler,
  })=> {
    return (
    
        <Grid item xs={12} sm={6} md={4} key={ttn} data-ttn={ttn}>
          <ListItem sx={{ minWidth: 275 }}>
              <Card sx={{ width: '100%' }}>
                <CardActionArea>
                  <CardContent onClick={onTtnListClickHandler} data-ttn={ttn}>
                    <Typography
                      onClick={onTtnListClickHandler}
                      sx={{ textAlign: 'center' }}
                      data-ttn={ttn}
                    >
                      {ttn}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    fullWidth
                    data-ttn={ttn}
                    onClick={onTtnDeleteClickHandler}
                  >
                    видалити
                  </Button>
                </CardActions>
              </Card>
          </ListItem>
        </Grid>

    )
}
export default TtnCards;



   

TtnCards.propTypes = {
    ttn: PropTypes.string.isRequired,
    onTtnListClickHandler: PropTypes.func.isRequired,
    onTtnDeleteClickHandler: PropTypes.func.isRequired,
  };