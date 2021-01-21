import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
function Iam() {
  return (
    <div>
    <Grid container spacing={4}>
    <Grid item={4}>
    <Typography        
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Meus Projetos
      </Typography>

    </Grid>
    <Grid item={8}>
    <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        Administrador de formação e amante de Tecnologia da Informação.
        
        Migrei da area administrativa para TI como docente
        de informática.
     
        Atualmente estou me especializando em desenvolvimento web.
      
        Meus projetos têm me orgulhado, como por exemplo a
        Calculadora de Impostos, onde utilizei NextJs, MongoDb na nuvem da AWS,
        e hospedagem na Vercel.
     
        
        Outro projeto importante foi o software de Pedidos Delivery,
        foi o meu primeiro projeto remunerado.
        
        </Typography>
        
    </Grid>

    </Grid>
      
    </div>
  );
}

export default Iam;
