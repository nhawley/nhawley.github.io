import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    overflowY: 'auto',
    backgroundColor: '#191919',
    height: '100vh',
    width: '100vw',
  },
  appbar: {
    height: '64px',
    backgroundColor: '#1e1e1e',
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
    maxWidth: '1000px',
    padding: '3em',
  },
  footer: {
    flexShrink: 0,
    height: '34px',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: '0.9rem',
    color: '#aaa',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <div className={classes.root}>
        <Navbar classes={classes} />
        <Container maxWidth='lg' className={classes.content}>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            <Route path='/'>
              <Home classes={classes} />
            </Route>
          </Switch>
        </Container>
        <footer className={classes.footer}>Nate Hawley III &copy; {(new Date().getFullYear())}</footer>
      </div>
    </Router>
  );
}
