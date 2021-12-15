import './Theme/Styles/App.css';
import 'react-toastify/dist/ReactToastify.css';

import { Button, CssBaseline, LinearProgress } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { SnackbarProvider } from 'notistack';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-redux-multilingual';
import { useHistory } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';

import MoreThanOneTabDialog from './components/Dialog/MoreThanOneTab';
import Notifier from './components/Notifications/Notifications';
import Root from './root';
import MuiTheme from './Theme/MuiThemes/MuiTheme';
import RTLMuiTheme from './Theme/MuiThemes/RTLMuiTheme';
import translations from './translations';
import jss from './utils/jssRTL';

// const Main = () => (
//   <SnackbarProvider>
//     <Notifier />

//   </SnackbarProvider>
// );

const App = ({
  dir,
  isFetching,
}) => {
  const history = useHistory()

  useEffect(() => {
    document.body.dir = dir;
  }, [dir]);

  // handle one active tab
  const [open, setOpen] = React.useState(false);
  window.addEventListener('storage', () => {
    setOpen(true);
  }, false)
  localStorage.setItem('OneTab', Math.random())

  // handle refresh on resize
  // React.useEffect(() => {
  //   function handleResize() {
  //     window.location.reload()
  //   }
  //   window.addEventListener('resize', handleResize)
  // })

  const Loading = () => {
    if (isFetching) {
      return (
        <div style={{ width: '100%', position: 'fixed', top: '0px', zIndex: '1000', }}>
          <LinearProgress />
        </div>
      );
    } else {
      return <></>;
    }
  };


  return (
    <>
      <ThemeProvider theme={RTLMuiTheme}>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <Root />
        </StylesProvider>
      </ThemeProvider>
      <Loading />
      <ToastContainer
        rtl
        position="top-left"
        autoClose={6000}
        transition={Slide}
        hideProgressBar={false}
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        closeOnClick
        limit={3}
        draggable={false}
      />
      <MoreThanOneTabDialog open={open} />
    </>
  );
};

const mapStateToProps = (state) => ({
  dir: state.Intl.locale === 'fa' ? 'rtl' : 'ltr',
  isFetching: state.account.isFetching
    || state.problem.isFetching
    || state.game.isFetching
    || state.exchange.isFetching,
});

export default connect(mapStateToProps)(App);
