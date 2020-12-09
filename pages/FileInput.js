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

  handleSubmit (files)  {  
    const nfsXml = files;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener('load', () => {
      const nf = xhr.responseXML;
      console.log(nf);

    })

    nfsXml.forEach(nfXml => {
      xhr.open('GET', nfXml.preview);
      // send the request
      xhr.send()
    });


  }

  render() {
   const { data } = this.state;
   const files = this.props.files;
   handleSubmit (files);

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
