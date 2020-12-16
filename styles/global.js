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
  
`;
