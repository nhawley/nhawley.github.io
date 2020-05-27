import React from "react";
import Grid from '@material-ui/core/Grid';

import twitterIcon from '../twitter.svg';
import githubIcon from '../github.svg';
import mailIcon from '../mail.svg';

function Contact() {
  return (
    <div style={{textAlign: 'center'}}>
      <h2 style={{marginBottom: '3em'}}>Contact Me</h2>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <a href="https://github.com/Nhawley" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} style={{ maxHeight: '140px', filter: 'invert(1)' }} alt="twitter" />
          </a>
          <a href="https://github.com/Nhawley" target="_blank" rel="noopener noreferrer">
            <h4>GitHub</h4>
          </a>
        </Grid>
        <Grid item xs={12} sm={4}>
          <a href="mailto:nhawley255@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={mailIcon} style={{ maxHeight: '140px', filter: 'invert(1)' }} alt="twitter" />
          </a>
          <a href="mailto:nhawley255@gmail.com" target="_blank" rel="noopener noreferrer">
            <h4>Email</h4>
          </a>
        </Grid>
        <Grid item xs={12} sm={4}>
          <a href="https://twitter.com/Nhawley255" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} style={{ maxHeight: '140px', filter: 'invert(1)' }} alt="twitter" />
          </a>
          <a href="https://twitter.com/Nhawley255" target="_blank" rel="noopener noreferrer">
            <h4>Twitter</h4>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Contact;
