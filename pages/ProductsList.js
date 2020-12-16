import React from 'react';
class ProductsList extends React.Component {
  constructor() {
    super();
  
   
  }
  render() {  
    const { products } = this.props;
    return (
      <div>  
           <h2>Produtos</h2>
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Custo Un</th>
              <th>Quant.</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.xprod}</td>
                <td>R${product.custoUn}</td>
                <td>{product.qcom}</td>
                <td>
                  <button>Adicionar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
          
             
      </div>
    );
  }
}
export default ProductsList;
