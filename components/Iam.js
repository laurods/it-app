import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
function Iam() {
  return (
    <div>
      <Typography        
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Lauro de Sá
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        Administrador de formação e amante de Tecnologia da Informação.
        
        Migrei da area administrativa para área da TI como docente
        de informática.
     
        Atualmente estou me especializando em desenvolvimento web.
      
        Meus projetos que desenvolvidos tem me orgulhado, como por exemplo a
        Calculadora de Impostos, onde utilizei NextJs, MongoDb na nuvem da AWS,
        hospedado na Vercel.
     
        
        Outro projeto importante foi o software de pedidos para uma lancheria,
        foi o meu primeiro projeto remunerado.
        
        </Typography>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default Iam;
