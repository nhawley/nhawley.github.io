import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import portrait from '../2020-q1.jpg';

const useStyles = makeStyles((theme) => ({
  text: {
    fontSize: '1.2rem',
    lineHeight: '1.75rem',
  }
}));

function About() {
  const classes = useStyles();

  return (
    <div>
      <h2 style={{ marginBottom: '3em', textAlign: 'center' }}>About Me</h2>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <img src={portrait} alt="Nate Hawley III Portrait" style={{ maxHeight: '400px'}} />
      </div>
      <p className={classes.text}> My name is Nate Hawley III, and I make mobile apps and websites. </p>
      <p className={classes.text}>
        I've been developing with mainly Javascript for 4 years, since graduating from Rutgers Univesity's Coding Bootcamp. I've worked as a freelance developer for several agencies and small compnaies. At Websignia I learned Wordpress and theme development with PHP (Laravel) to develop and maintain sites such as <a href="http://nynjmsdc.org/" target="_blank" rel="noopener noreferrer">NY & NJ MSDC</a>. At Disrupt I used React and Node.Js to develop a MVP for <a href="https://trueconnect.io/" target="_blank" rel="noopener noreferrer">True Connect</a>. At <a href="https://www.centerforresilience.com/" target="_blank" rel="noopener noreferrer">CFR (The Center For Resilience)</a> I used React Native to develop an app to digitize their tools that improve mental health and build resilience. At Local Wisdom I used Wordpress and Javascript to develop a new site for <a href="https://www.carislifesciences.com/" target="_blank" rel="noopener noreferrer">Caris Life Sciences</a>. At <a href="https://mediacutlet.com/" target="_blank" rel="noopener noreferrer">MediaCutlet</a> I assist in mataining and developing Wordpress sites for their clients.
      </p>
      <p className={classes.text}>
        In addition to working as a freelance developer, I've also worked on side projects in small teams or independently. With some friends from Rutgers I used React Native and Node.Js to create the front-end and back-end for an event-based social media app called <a href="https://www.dailytargum.com/article/2016/10/rutgers-student-alumni-launch-social-media-application" target="_blank" rel="noopener noreferrer">Jabbr</a>. I then used that same tech stack to create a private chat app called AlertHero with a fellow Rutgers Coding Bootcamp alumni. I was the front-end (React-Native) developer for LimaBid, a local auction app with a small team. I've been working on my own app NapNow, built with React-Native.  
      </p>
      <p className={classes.text}>
        Outside of coding, I also love making and playing music. You can find my latest music projects at <a href="https://www.djnatetorious.com/" target="_blank" rel="noopener noreferrer"> DJ Natetorious</a>!
      </p>
      <h2><Link to='/contact'>Contact Me</Link></h2>
    </div>
  );
}

export default About;
