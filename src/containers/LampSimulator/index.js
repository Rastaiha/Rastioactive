import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  INSIDE_BOX_WITH_ON_LAMP,
} from '../utils';

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
  const [answer, setAnswer] = React.useState();

  const handleSubmit = () => {
    if (answer == 'الکترومغناطیس') {
      toast.success('خنده بر لب می‌زنم تا کس نداند راز من!');
      setTimeout(() => {
        window.location.href = `/${INSIDE_BOX_WITH_ON_LAMP}`;
      }, 6000);
    } else {
      toast.error('ورنه این دنیا که ما دیدیم، خندیدن نداشت :(');
    }
  }

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
              <Typography align='center' variant='h2'>
                {'دومین قانون بنیادی طبیعت؟'}
              </Typography>
            </Grid>
            <Grid item>
              <TextField onChange={(e) => { setAnswer(e.target.value) }}
                variant='outlined' color='primary' fullWidth label='پاسخ خود را اینجا وارد کنید' />
            </Grid>
            <Grid item>
              <Button onClick={handleSubmit} variant='contained' color='primary' fullWidth>
                {'ثبت'}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};


export default Index;
