// /*==================================================
// Header.js

// It contains the Header component to be displayed on every page.
// The header contains navigation links to every other page.
// ================================================== */
// Import "material" library for building UI with React components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';

// Define styling for the header
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontFamily: 'Raleway, sans-serif', // Change font to Raleway
    fontSize: '35px',
    color: 'white',
  },
  appBar: {
    backgroundColor: '#C1121F', // Make the navbar red
    boxShadow: 'none', // Remove the shadow
  },
  links: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: '#8B0000', // Make the button color dark red
    color: 'white', // Text color for buttons
    marginRight: '10px',
  },
}));

// Header component, displayed on every page
// Links to every other page
const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            Campus Management System
          </Typography>

          <Link className={classes.links} to={'/'}>
            <Button variant="contained" className={classes.button}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/campuses'}>
            <Button variant="contained" className={classes.button}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'}>
            <Button variant="contained" className={classes.button}>
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;

