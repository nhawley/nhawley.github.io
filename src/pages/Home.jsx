import React from 'react';
import { Link } from 'react-router-dom';

import SkillLogo from '../components/SkillLogo';
import ContactRow from '../components/ContactRow';

import useStyles from '../styles/home';
import selfPic from '../images/2020.jpg';
import htmlLogo from '../images/html-css-js_icon.png';
import graphQLogo from '../images/graphql_logo.png';
import hostingLogo from '../images/hosting_logo.png';
import mysqlLogo from '../images/mysql_logo.png';
import nodeLogo from '../images/nodejs_logo.png';
import reactLogo from '../images/react_logo.png';
import reactNatLogo from '../images/reactnative_logo.png';
import wordprLogo from '../images/wordpress_logo.png';

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.homeRoot}>
      <section className={`${classes.topSection}`}>
        <div className='row container'>
          <div className='col-50'></div>
          <div className='col-50'>
            <div>
              <p className={`${classes.topheading} text-focus-in `}>Hi I'm</p>
            </div>
            <div>
              <h1 className={`${classes.heading} text-focus-in `}>
                Nate <br /> Hawley III
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.aboutSection}>
        <div className='custom-shape-divider-bottom-1596551031'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M1200 120L0 16.48 0 0 1200 0 1200 120z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
        <div className='row container' style={{ zIndex: '1' }}>
          <div className='col-50'>
            <h2>Web & Mobile</h2>
            <h3>Fullstack Developer</h3>
            <p className='pr-40' style={{ marginBottom: '30px' }}>
              I am a Full Stack Developer with over 4 years of experience
              building websites and mobile apps. I work primarily with Wordpress
              and Javascript frameworks (React & React-Native).
              <br />I am always looking forward to learning new technologies and
              improving on my current skills. Continue scrolling to check out
              some of my work.
            </p>
            <Link className='button shadow-pop-tl' to='/about'>
              Learn More
            </Link>
          </div>
          <div className='col-50 flex-center'>
            <img src={selfPic} alt='portrait' className={classes.img} />
          </div>
        </div>
      </section>
      <section className={classes.skillSection}>
        <div className='row container' style={{ display: 'block' }}>
          <h2
            style={{
              textAlign: 'center',
              margin: 0,
              width: '100%',
              marginBottom: '25px',
            }}
          >
            Skills
          </h2>
        </div>
        <div className='row container'>
          <SkillLogo title='HTML, CSS, & JS' image={htmlLogo} num={5} />
          <SkillLogo title='Wordpress' image={wordprLogo} num={4} />
          <SkillLogo title='React' image={reactLogo} num={4} />
          <SkillLogo title='Node JS' image={nodeLogo} num={4} />
          <SkillLogo title='React Native' image={reactNatLogo} num={3} />
          <SkillLogo title='GraphQL' image={graphQLogo} num={2} />
          <SkillLogo title='MySQL' image={mysqlLogo} num={3} />
          <SkillLogo title='Self Hosting' image={hostingLogo} num={4} />
        </div>
      </section>
      <section>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Reach out to me here
        </h2>
        <ContactRow />
      </section>
    </div>
  );
}

export default Home;