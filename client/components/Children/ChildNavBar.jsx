import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    gridColumn: "1 / 13",
    gridRow: '1 / 2'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const buttonStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.25rem',
  fontFamily: "Arial !important",
  fontWeight: '500',
  innerHeight: '1.6',
  letterSpacing: '0.0075em',
}

export default function ChildNavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <img
            className='imagesChild'
            src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300"
            width="50px"
            height="50px"
          ></img>
          <div className="linkContainer">
            <Link className='relativeContainer' to="#" style={buttonStyle}>
              <div className='navBarLinks' >Hey, Ozi</div>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}