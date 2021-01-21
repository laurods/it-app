import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

function CarProjects() {
  return (
    <div>
      <Grid container spacing={4}>           
              <Grid xs={4} sm={6} md={4}>
                <Card >                  
                  <CardContent>
                    <Typography gutterBottom component="h6">
                      Calculadora de Impostos
                    </Typography>
                    <Typography>
                      Site que calcula impostos das notas de compras. 
                      Auxilia pequenos comerciantes a calcular custos de mercadorias e precificar produtos.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver
                    </Button>                    
                  </CardActions>
                </Card>
                </Grid>
                <Grid xs={4} sm={6} md={4}>
                <Card >                  
                  <CardContent>
                    <Typography gutterBottom component="h6">
                      Pedidos Delivery
                    </Typography>
                    <Typography>
                      Software para controle de clientes e impressão de pedidos. 
                      Automatiza Delivery de lancheria e restaurantes.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Ver
                    </Button>                    
                  </CardActions>
                </Card>
                </Grid> 
          </Grid>
    </div>
  );
}

export default CarProjects;
