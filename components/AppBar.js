import React from "react";
import Typography from "@material-ui/core/Typography";
import AssignmentIcon from '@material-ui/icons/Assignment';

function AppBar() {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <AssignmentIcon />
          <Typography variant="h6" color="inherit" noWrap>
            Meus Projetos
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default AppBar;
