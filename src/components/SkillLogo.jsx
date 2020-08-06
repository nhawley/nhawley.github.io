import React from "react";
import CountUp from 'react-countup';

import useStyles from '../styles/home';

function SkillLogo({image, num, title}) {
  const classes = useStyles();

  return (
    <div className='col-25 flex-center' style={{ marginBottom: '1rem' }}>
      <div className='row flex-center flex-col'>
        <p style={{ marginBottom: '7px' }}>{title}</p>
        <img
          src={image}
          alt='icon'
          className={`${classes.logo} puff-in-center logoski`}
        />
        <p className={classes.logoText}>
          <CountUp
            start={0}
            end={num}
            delay={1}
            duration={2.5}
            style={{ fontSize: '2.5rem', fontWeight: '700', color: '#35A2C7' }}
          />{' '}
          Years
        </p>
      </div>
    </div>
  );
}

export default SkillLogo;