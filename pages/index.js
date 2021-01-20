import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TopBar from '../components/TopBar'
import Iam from '../components/Iam';
function Home() {
  return (
    <div>
     <CssBaseline />
     <TopBar />

      <main>
        

        <Container maxWidth="sm">
        <Iam />
        

        </Container>
      </main>
    </div>
  );
}

export default Home;
