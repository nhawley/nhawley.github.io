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
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Navbar({ classes }) {
  return (
    <React.Fragment>
      <AppBar position='static' className={classes.appbar}>
        <Toolbar>
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
                    <Link style={{ color: 'white' }} to='/portfolio'>Portfolio</Link>
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