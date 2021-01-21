import React from "react";
import Typography from "@material-ui/core/Typography";
import AssignmentIcon from '@material-ui/icons/Assignment';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';

function TopBar() {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <AssignmentIcon />
          <Typography variant="h6" color="inherit" noWrap>
            Lauro de Sá
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopBar;
