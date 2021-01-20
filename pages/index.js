import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from '../components/AppBar'
import Iam from '../components/Iam';
function Home() {
  return (
    <div>
     <CssBaseline />
     <AppBar />

      <main>
        

        <Container maxWidth="sm">
        <Iam />
        

        </Container>
      </main>
    </div>
  );
}

export default Home;
