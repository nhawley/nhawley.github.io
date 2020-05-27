import React from 'react';
import PropTypes from 'prop-types';
import {
  useScrollTrigger,
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Slide,
  Container,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Navbar({ classes }) {
  return (
    <React.Fragment>
      <AppBar position='static' className={classes.appbar}>
        <Toolbar variant='dense'>
          <Container maxWidth='lg'>
            <Grid container spacing={3}>
              <Grid item sm={9} md={10}>
                <Typography variant='h5' style={{ fontWeight: 'bold' }}>
                  <Link to='/' style={{ color: 'white' }}>Nate Hawley III</Link>
                </Typography>
              </Grid>
              <Grid item sm={3} md={2}>
                <Grid
                  container
                  spacing={2}
                  justify='center'
                  alignItems='center'
                  style={{marginTop: 'auto'}}
                >
                  <Grid item xs>
                    <Link style={{ color: 'white' }} to='/about'>About</Link>
                  </Grid>
                  <Grid item xs>
                    <Link style={{ color: 'white' }} to='/contact'>Contact</Link>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  )
}