import React from 'react';
class NFList extends React.Component {
  constructor() {
    super();
  
   
  }
  render() {  
    const { products } = this.props;
    return (
      <div>  
           <h2>NFs</h2>
        <table>
          <thead>
            <tr>
              <th>Notas</th>              
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.ceantrib}>               
                <td>{product.qcom}</td>               
              </tr>
            ))}
          </tbody>
        </table>
          
             
      </div>
    );
  }
}
export default NFList;
