import { makeStyles } from '@material-ui/core/styles';
import sun from '../images/sun.png';
import redMatrix from '../images/red-matrix.png';

const useStyles = makeStyles((theme) => ({
  homeRoot: {
    width: '100%',
    height: '100%',
    display: 'block',
  },
  appheading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  topSection: {
    display: 'flex',
    backgroundColor: '#242020',
    backgroundImage: `url(${sun})`,
    backgroundPosition: '12vw 50%',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    minHeight: '40vh',
  },
  topheading: {
    fontSize: theme.typography.pxToRem(21),
    fontWeight: '700',
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
    margin: '0',
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
  aboutSection: {
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
  skillSection: {
    backgroundColor: '#000',
    position: 'relative',
    minHeight: '40vh',
    backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.85) 25%, rgba(37,32,32,0.95) 100%), url(${redMatrix})`,
    backgroundSize: 'cover',
  },
  logo: {
    width: '200px',
  },
  logoText: {
    fontFamily: 'Poppins',
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '10px 0px',
  }
}));

export default useStyles;