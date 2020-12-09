import React from "react";
import axios from 'axios';


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

  handleSubmit(files) {
   const nfsXml = files;
     
    /*
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
    */
   nfsXml.forEach(nfXml => {
      axios.get(nfXml.preview, {responseType: 'document'})
      .then(res =>{
         const nf = res.data;
         const Det = nf.getElementsByTagName('det');
         console.log(Det);       
      })
  });
    

  }

  render() {
   const { data } = this.state;
   if(this.props.files){
    const files = this.props.files;
    this.handleSubmit(files);
   }
   

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
