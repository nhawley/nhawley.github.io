import React from "react";
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import ContactRow from '../components/ContactRow';
import useStyles from '../styles/about';
import selfPic from '../images/2020.jpg';

function About() {
  const classes = useStyles();

  return (
    <div className={classes.aboutRoot}>
      <section>
        <div className='row container'>
          <h1 className={`${classes.heading} tracking-in-expand`}>About Me</h1>
        </div>
      </section>
      <section className={classes.bioSection}>
        <div className='row container'>
          <div
            className='col-33 flex-center'
            style={{ flexDirection: 'column' }}
          >
            <img
              src={selfPic}
              alt='portrait'
              className={classes.img}
              style={{ marginBottom: '30px' }}
            />
            <Link className='button shadow-pop-tl' to='/portfolio'>
              View Portfolio
            </Link>
          </div>
          <div className='col-67'>
            <h2>Nate Hawley III</h2>
            <h3>Fullstack Developer</h3>
            <p className='pr-80'>
              I am a Full Stack Developer with over 4 years of experience
              building websites and mobile apps. Since graduating from Rutgers
              University's Coding Bootcamp 4 years ago I have been developing
              with Wordpress and Javascript. I have worked as a freelance
              developer for several agencies, startups, and small companies.
              <br /> <br />
              At Websignia I learned Wordpress and custom theme development with
              PHP (Laravel) to develop and maintain sites such as{' '}
              <a
                href='http://nynjmsdc.org/'
                target='_blank'
                rel='noopener noreferrer'
              >
                NY & NJ MSDC
              </a>
              .
              <br /> <br />
              At Disrupt I used React and Node JS to develop a MVP for{' '}
              <a
                href='https://trueconnect.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                True Connect
              </a>
              .
              <br /> <br />
              At{' '}
              <a
                href='https://www.centerforresilience.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                CFR (The Center For Resilience)
              </a>{' '}
              I used React Native to develop an app to digitize their tools that
              improve mental health and build resilience.
              <br /> <br />
              At Local Wisdom I used Wordpress and Javascript to develop a new
              site for{' '}
              <a
                href='https://www.carislifesciences.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Caris Life Sciences
              </a>
              .
              <br /> <br />
              At{' '}
              <a
                href='https://mediacutlet.com/'
                target='_blank'
                rel='noopener noreferrer'
              >
                MediaCutlet
              </a>{' '}
              I assist in mataining and developing Wordpress sites for their
              clients.
            </p>
          </div>
        </div>
      </section>
      <section className={classes.projectSection}>
        <div
          className='row container'
          style={{ flexDirection: 'column', alignItems: 'flex-start' }}
        >
          <p className={classes.overline}>Where Passion Meets Code</p>
          <h2 style={{ margin: 0 }}>Side Projects</h2>
          <p>
            In addition to working as a freelance developer, I have also worked
            on side projects in small teams or independently.
          </p>
        </div>
        <div className='row container'>
          <div className='col-50'>
            <Card className={classes.card}>
              <CardContent>
                <div></div>
                <div>
                  <h4>Jabbr</h4>
                  <p>
                    With some friends from Rutgers I used React Native and
                    Node.Js to create the Front End and Back End for an
                    event-based social media app called{' '}
                    <a
                      href='https://www.dailytargum.com/article/2016/10/rutgers-student-alumni-launch-social-media-application'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Jabbr
                    </a>
                    .
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='col-50'>
            <Card className={classes.card}>
              <CardContent>
                <div></div>
                <div>
                  <h4>AlertHero</h4>
                  <p>
                    With some fellow alumni from Rutgers Coding Bootcamp I used
                    React and Node JS to create a private chat app called
                    AlertHero.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='col-50'>
            <Card className={classes.card}>
              <CardContent>
                <div></div>
                <div>
                  <h4>LimaBid</h4>
                  <p>
                    Along with a friend from high school I joined a small team
                    to develop the mobile app LimaBid. I was the project's
                    Front-End developer and built the app with React-Native.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className='col-50'>
            <Card className={classes.card}>
              <CardContent>
                <div></div>
                <div>
                  <h4>Sleep Cycle App (TBD)</h4>
                  <p>
                    I am currently learning Swift and hope to have my first
                    native iOS app out later this year.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section>
        <div className='row container flex-center'>
          <p>
            Outside of coding, I also love making and playing music. You can
            find my latest music projects at{' '}
            <a
              href='https://soundcloud.com/djnatetorious'
              target='_blank'
              rel='noopener noreferrer'
            >
              {' '}
              DJ Natetorious
            </a>
            !
          </p>
        </div>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Contact Me Here
        </h2>
        <ContactRow />
      </section>
    </div>
  );
}

export default About;
