import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  portfolioRoot: {
    width: '100%',
    height: '100%',
    display: 'block',
    minHeight: '100vh',
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
}));

export default useStyles;
