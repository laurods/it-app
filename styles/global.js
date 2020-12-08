import { createGlobalStyle } from 'styled-components';
import 'react-circular-progressbar/dist/styles.css';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}
body{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    background: #7159c1;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}
html, body, #root{
    height: 100%;
}

table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td, th {
    border: 1px solid #cccccc;
    padding: 8px;
  }
  
  th {
    font-weight: bold;
    text-transform: uppercase;    
  }
  tr:nth-child(even){
    background-color: #dddddd;
  }
  
  tr:hover{
    background-color: #333;
    color: white;
  }
  
  .xprod{
    width: 500px;
  }
  .custoUn{
    width: 100px;
  }
  
  .nf-card-details{
    display: none;  
  }
  
  .nf-card-details-item{
    width: 200px;
    float: left;
  }
  .nf-card-details-input{
    width: 230px;
    float: left;  
  }
  
  .nf-card-details-input-default{
    width: 100px; 
  }
  
  .nf-card-details-input-xprod{
    width: 98%; 
  }
  .nf-card-details-input-cx{
    width: 100px; 
    float: left;
  }
  .nf-card-details-input-item{
    width: 100px; 
    float: left;
  }
  .nf-card-details-top{
    width: 100%; 
  }
  
  .nf-card-details-left{
    width: 50%; 
    float: left;
  }
  .nf-card-details-right{
    width: 50%;  
    float: left;
  }
  .nf-card-details-button{
    width: 100%;
    height: 20px;  
  }

`;