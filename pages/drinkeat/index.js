import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import TopBar from '../../components/TopBar'
import Contact from '../../components/Contact'
import CardProjects from '../../components/CardProjects';
function Index() {
  return (
    <div>
     <CssBaseline />
     <TopBar />

      <main>
        <Container>
        <Grid container spacing={3}>
        <Grid item xs={8}>       
         <Contact />
        </Grid>
        <Grid item xs={12}>       
        <h1>DrinkEat</h1>
        </Grid>
        <Grid item xs={12}>       
         <CardProjects />
        </Grid>



        </Grid>
        </Container>
      </main>
    </div>
  );
}

export default Index;
