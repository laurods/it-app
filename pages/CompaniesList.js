import React from 'react';
class CompaniesList extends React.Component {
  constructor() {
    super();
  
   
  }
  render() {  
    const { companies } = this.props;    
    return (
      <div>  
          
        <table>
          <thead>
            <tr>
              <th>FORNECEDORES</th>              
            </tr>
          </thead>
          <tbody>
            {companies.map((company) => (
              <tr key={company}>               
                <td>{company}</td>               
              </tr>
            ))}
          </tbody>
        </table>
          
             
      </div>
    );
  }
}
export default CompaniesList;
