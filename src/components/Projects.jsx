import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import useStyles from '../styles/home';

function Projects () {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <ExpansionPanel
        expanded={expanded === 'panel01'}
        onChange={handleChange('panel01')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography className={classes.appheading}>NapNow</Typography>
          <Typography className={classes.secondaryHeading}>
            Sleep cycle app [React-Native]
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            NapNow is a sleep cycle app built with react-native. It was created
            to estimate how long you can nap or sleep to wake up after a full
            cycle.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1bh-content'
          id='panel1bh-header'
        >
          <Typography className={classes.appheading}>LimaBid</Typography>
          <Typography className={classes.secondaryHeading}>
            Local auction app [React-Native]
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            LimaBid is a local auction app built with react-native. It was
            created for quick and easy transactions in an urban or college
            environment.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography className={classes.appheading}>AlertHero</Typography>
          <Typography className={classes.secondaryHeading}>
            Private chat app [React-Native, Node.Js, React]
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            AlertHero is a private chat app built with react-native. It was
            created for small to medium communities to share "alerts" and chat
            securely.
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3bh-content'
          id='panel3bh-header'
        >
          <Typography className={classes.appheading}>M3Watch</Typography>
          <Typography className={classes.secondaryHeading}>
            Financial news tool built with APIs [React, APIs]
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            M3-Watch is a a mobile-ready market data and financial news research
            tool. Built on Google Materialize, it employs a minimalist design
            aesthetic to provide users with rapid and intuitive data snapshots
            of publicly traded company of their interest.
            <br />
            <br />
            <a
              href='https://github.com/Nhawley/m3-watch'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub Link
            </a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
      >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel4bh-content'
          id='panel4bh-header'
        >
          <Typography className={classes.appheading}>BlipBoard</Typography>
          <Typography className={classes.secondaryHeading}>
            Web scrapped auto news site [React, Node.Js]
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            I used a web scrapper to create a quick web app to get all my car
            news.
            <br />
            <br />
            <a
              href='https://github.com/Nhawley/Blipboard'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub link
            </a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default Projects;