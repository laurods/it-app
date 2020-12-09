import React from "react";
import NFCard from './NFCard';

class FileInput extends React.Component {
  constructor() {
    super();
    this.state = {     
      data: [],
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

  handleSubmit (file)  {  
    const nfXml = file;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      const nf = xhr.responseXML;
      console.log(nf);

    })
    xhr.open('GET', nfXml)
    // send the request
    xhr.send()

  }

  render() {
   const { data } = this.state;
   const files = this.props.files;
   if(files.length > 0){
    files.forEach(file => {     
      this.handleSubmit(file.preview);
    });
   }
 
  
    return (
      
      (
        <div>
          <p>Teste</p>        
          {data.length > 0 &&
            <div>
              <th className="xprod"> Produto</th>
              <th className="custoUn">Custo</th>
              <div>
                  {data.map((nf) => <NFCard key={nf.cprod} nf={nf} />)}
                  
              </div>
            </div>
          }
          
        </div>
      )
    );
  }
}
export default FileInput;
