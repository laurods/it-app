import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Iam from '../components/Iam';
function Home() {
  return (
    <div>
      <CssBaseline />
      <main>
        <Container maxWidth="sm">
         <Iam />
        

        </Container>
      </main>
    </div>
  );
}

export default Home;
