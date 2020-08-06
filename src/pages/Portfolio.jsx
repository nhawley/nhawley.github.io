import React from "react";

import useStyles from '../styles/portfolio';

function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.portfolioRoot}>
      <section>
        <div className='row container'>
          <h1 className={`${classes.heading} tracking-in-expand`}>Portfolio</h1>
        </div>
        <h3 className="flex-center">In Development</h3>
      </section>
    </div>
  );
}

export default Contact;
