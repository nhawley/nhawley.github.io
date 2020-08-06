import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  aboutRoot: {
    width: '100%',
    height: '100%',
    display: 'block',
  },
  heading: {
    padding: '0',
    margin: '0',
    lineHeight: '1',
    fontSize: theme.typography.pxToRem(100),
    fontWeight: '700',
    fontFamily: 'Poppins',
    letterSpacing: '0',
    textShadow: '1px 1px 10px rgba(0,0,0,0.25)',
  },
  bioSection: {
    display: 'flex',
    backgroundColor: '#242020',
    position: 'relative',
    minHeight: '30vh',
  },
  img: {
    borderRadius: '300px 300px 300px 300px',
    boxShadow: '4px 0px 25px 0px rgba(0,0,0,0.05)',
    verticalAlign: 'middle',
    display: 'inline-block',
    height: 'auto',
    maxWidth: '75%',
    border: 'none',
    filter: 'contrast(1.2)',
  },
  overline: {
    fontSize: '0.8rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.8px',
    color: '#BE0B16',
  },
  projectSection: {
    backgroundColor: 'black',
  },
  card: {
    backgroundColor: '#191919',
    color: '#ffffff',
    width: '95%',
    marginBottom: '25px',
  },
}));

export default useStyles;
