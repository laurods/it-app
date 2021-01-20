import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function Contact() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
      <BottomNavigationAction label="LinkIn" icon={<LinkedInIcon />} />
      <BottomNavigationAction label="Facebook" icon={< FacebookIcon/>} />
      <BottomNavigationAction label="Facebook" icon={< InstagramIcon/>} />
    </BottomNavigation>
  );
}
