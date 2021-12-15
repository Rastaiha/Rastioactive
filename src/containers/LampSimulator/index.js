import {
  Button,
  Container,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useImage from 'use-image';

import Scene from '../Scene';
import Objects from './Objects';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 'auto !important',
    marginLeft: 'auto !important',
    minHeight: '100vh'
  },
  background: ({ backgroundImage }) => ({
    transform: 'scale(1.1)',
    height: '100vh',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    background: `url(${process.env.PUBLIC_URL + backgroundImage}) no-repeat center center fixed`,
    opacity: '0.5',
    backgroundSize: 'cover',
    zIndex: '-1',
    animation: 'show-back 0.8s 0.3s both',
    filter: 'blur(3px)',
  }),
}));

const Index = ({
  backgroundImage = 'Room0/background.png'
}) => {
  const history = useHistory();
  const classes = useStyles({ backgroundImage });

  return (
    <>
      <div className={classes.background} />
      <Container maxWidth='xl'>
        <Grid container spacing={2} className={classes.container}>
          <Grid item container sm={9} alignItems='center' justifyContent='center' >
            <iframe frameBorder="0" width='100%' height='90%' title='lamp' src="/LampSimulator/" />
          </Grid>
          <Grid item container direction='column' justifyContent='center' sm={3} spacing={2}>
            <Grid item>
              <Button size='large' variant='contained' color='primary' fullWidth>
                {'سلام'}
              </Button>
            </Grid>
            <Grid item>
              <Button size='large' variant='contained' color='primary' fullWidth>
                {'سلام'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};


export default Index;
