import React from "react";


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
   console.log(files); 
 
  
  
    return (
      
      (
        <div>
          <p>File Input</p>        
        
          
        </div>
      )
    );
  }
}
export default FileInput;
