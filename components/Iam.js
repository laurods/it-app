import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';
function Iam() {
  return (
    <div>
       <Typography variant="subtitle1" align="center" color="textSecondary" paragraph>
        Sou <strong>Lauro de Sá</strong>, administrador de formação e amante de Tecnologia da Informação.
        
        Em 2010, sai da area administrativa e entrei na área da TI como docente
        de informática.
     
      Atualmente estou me especializando em desenvolvimento Web na Trybe.
      
        Os projetos que desenvolvi tem me orgulhado, como por exemplo a
        Calculadora de Impostos, onde utilizei NextJs, MongoDb na nuvem da AWS,
        hospedado na Vercel.
     
        
        Outro projeto foi meu primeiro software para uma lancheria que imprime
        pedidos. É especial porque foi o primeiro que recebi dinheiro para
        desenvolve-lo.
        
        </Typography>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}

export default Iam;
