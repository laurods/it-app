import React from 'react';
class NFList extends React.Component {
  constructor() {
    super();
  
   
  }
  render() {  
    const { nfs } = this.props;    
    return (
      <div>  
           
        <table>
          <thead>
            <tr>
              <th>NOTAS</th>              
            </tr>
          </thead>
          <tbody>
            {nfs.map((nf) => (
              <tr key={nf}>               
                <td>{nf}</td>               
              </tr>
            ))}
          </tbody>
        </table>
          
             
      </div>
    );
  }
}
export default NFList;
