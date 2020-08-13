import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

library.add(fab, faEnvelope);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    overflowY: 'auto',
    backgroundColor: '#242020',
  },
  appbar: {
    height: '72px',
    backgroundColor: '#000',
    opacity: 0.85,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    justifyContent: 'center',
    alignContent: 'center',
  },
  content: {
    flex: 1,
    minHeight: '1px',
    padding: 0,
  },
  footer: {
    backgroundColor: '#000',
    height: '43px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '1rem',
    lineHeight: '1.6rem',
    letterSpacing: '0px',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <ScrollToTop />
      <div className={classes.root}>
        <Navbar classes={classes} />
        <Container maxWidth='lg' className={classes.content}>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/portfolio'>
              <Portfolio />
            </Route>
            <Route path='/'>
              <Home classes={classes} />
            </Route>
          </Switch>
        </Container>
        <footer className={classes.footer}>
          Nate Hawley III &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </Router>
  );
}
