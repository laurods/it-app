import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
function Iam() {
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Lauro de Sá
      </Typography>
      <Typography variant="h6" align="center" color="textSecondary" paragraph>
        <p>Administrador de formação e amante de Tecnologia da Informação.</p>
        
        <p>Em 2010, sai da area administrativa e entrei na área da TI como docente
        de informática.</p>
     
      <p>Atualmente estou me especializando em desenvolvimento Web na Trybe.</p>
      
        <p>Os projetos que desenvolvi tem me orgulhado, como por exemplo a
        Calculadora de Impostos, onde utilizei NextJs, MongoDb na nuvem da AWS,
        hospedado na Vercel.</p>
     
        <p>
        Outro projeto foi meu primeiro software para uma lancheria que imprime
        pedidos. É especial porque foi o primeiro que recebi dinheiro para
        desenvolve-lo.
        </p>
        </Typography>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default Iam;
