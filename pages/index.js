import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import axios from 'axios';

import api from '../services/api';
import GlobalStyle from '../styles/global'
import { Container, Left, Content } from './styles';
import Upload from '../components/Upload';
import NFList from './NFList';
import CompaniesList from './CompaniesList';
import ProductsList from './ProductsList';
class Home extends Component{
    state = {
        uploadedFiles: [],
        nfs: [],
        products: [],
        companies: []
    };
    /*
    async componentDidMount(){
    
        const response = await api.get('post');

        this.setState({
            updateFiles: response.data.map(file => ({
                id: file._id,
                name: file.name,
                preview: file.url,
                uploaded:true,
                url: file.url,
            }))
        })
    }
    */
    handleUpload = files => {
      const uploadedFiles = files.map(file => ({
        file,
        id: uniqueId(),
        name: file.name,
        preview:URL.createObjectURL(file),
        progress: 0,
        uploaded: false,
        error: false,
        url: null,        
      }))
           
      this.setState({            
        uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
     });
     uploadedFiles.forEach(this.processXML); 

    //uploadedFiles.forEach(this.processUpload); Função para armazenar no banco de dados

    };
    /*Incio CreateNF*/
    createNF = (data) => {
        const nf = data;
        const nNF = nf.getElementsByTagName('nNF')[0].innerHTML;
      /*-------------------------------------------------------*/
     // Verifica se a NF já existe
      const isNFexist = this.state.nfs.filter(nf => nf===nNF);
      if(isNFexist.length > 0){
        alert('Nota fiscal já processada');
        return;
      }
      // Fim Verifica se a NF já existe
        const xNome = nf.getElementsByTagName('xNome')[0].innerHTML; 
        const Det = nf.getElementsByTagName('det');
        const xProd = nf.getElementsByTagName("xProd");
        const uCom = nf.getElementsByTagName("uCom");
        const qCom = nf.getElementsByTagName("qCom");
        const pICMS = nf.getElementsByTagName("pICMS");
        const vProd = nf.querySelectorAll("prod vProd");
        const cEAN = nf.getElementsByTagName("cEAN")//Codigo de barras da caixa
        const cEANTrib = nf.getElementsByTagName("cEANTrib");// codigo de barras do produto que está dentro da caixa
           /*-------------------------------------------------------*/
     // Padronizando os dados dos valores de IPI
     const allipi = nf.getElementsByTagName("IPI");
     const vlrIpi = [];
     for (let index = 0; index < allipi.length; index++) {
       if (allipi[index].childNodes[1].nodeName == "IPINT") {
         //console.log(`${index} - não tem ipi`)
         vlrIpi.push('0');
       } else if (allipi[index].childNodes[1].nodeName == "IPITrib") {
         //console.log(`${index} - ${allipi[index].childNodes[1].children}`);
         let c = allipi[index].childNodes[1].children;
         vlrIpi.push(c[3].innerHTML);
         //console.log(`${index} - ${c[3].innerHTML}`);          
       } else {
         //console.log(`nada`)
       }
     }
   // fim Padronizando os dados dos valores de IPI
   /*-------------------------------------------------------*/
    // Padronizando os dados dos valores de ICMS
   const allicms = nf.getElementsByTagName("ICMS");
   //console.log(allicms);
   const vlrIcmsSubst = [];
   const vlrIcms = [];
   for (let index = 0; index < allicms.length; index++) {
     if (allicms[index].childNodes[0].nodeName == "ICMS00") {
       let d = allicms[index].childNodes[0].children;
       //console.table(`${index} - não tem substituição`);
       vlrIcmsSubst.push('0');
       vlrIcms.push(d[5].innerHTML);
     } else if (allicms[index].childNodes[0].nodeName == "ICMS10") {
       let c = allicms[index].childNodes[0].children;
       vlrIcmsSubst.push(c[10].innerHTML);
       vlrIcms.push(c[10].innerHTML);
       //console.log(`${index} - ${c[10].innerHTML}`); 

     } else {
       console.log(`nada ..`)
     }
   }
 // Fim Padronizando os dados dos valores de ICMS
 /*-------------------------------------------------------*/
   // Calculando Diferença de ICMS
   const pIcmsRS = 18
   const pDifcaIcms = [];
   for (let index = 0; index < pICMS.length; index++) {
     pDifcaIcms.push(pIcmsRS - parseFloat(pICMS[index].innerHTML));
     //console.log(`indice : ${index} - diferença: ${pDifcaIcms}`)
   }
   // Fim Calculando Diferença de ICMS
 /*-------------------------------------------------------*/
     // Criando objeto para nota fiscal
     const items = [];
     const createObj = (item, nameObj) => {

       let arrItem = [];
       for (let index = 0; index < item.length; index++) {
         arrItem.push(item[index].childNodes[0].nodeValue);
       }
       const obj = {};
       const currentObj = obj;
       currentObj[[nameObj[0]]] = arrItem;
       items.push(obj);
     }
    // Fim Criando objeto para nota fiscal 
     /*-------------------------------------------------------*/
     // Chamando a função createObj para cada tag do XML
     createObj(Det, ['det']);      
     createObj(xProd, ['xprod']);
     createObj(uCom, ['ucom']);
     createObj(qCom, ['qcom']);
     createObj(pICMS, ['picms']);
     createObj(vProd, ['vprod']);
     createObj(cEAN, ['cean']);
     createObj(cEANTrib, ['ceantrib']);
   // fim Chamando a função createObj para cada tag do XML
   /*-------------------------------------------------------*/
    //Desestruturando objeto items para faciliar o acesso aos atributos.

    const [
     det,      
     xprod,
     ucom,
     qcom,
     picms,
     vprod,
     cean,
     ceantrib,        
   ] = items;
   //Fim Desestruturando objeto items para faciliar o acesso aos atributos.
   /*-------------------------------------------------------*/
     //Criando novo objeto nfList com atributos calculados.
     const nfList = det.det.map((produto, indice) => {
       const row = {
         id: uniqueId(), 
         nnf: nNF,
         cean: cean.cean[indice],
         ceantrib: ceantrib.ceantrib[indice],          
         xprod: xprod.xprod[indice],
         ucom: ucom.ucom[indice],
         qcom: parseFloat(qcom.qcom[indice]).toFixed(2),
         picms: parseFloat(picms.picms[indice]),
         perDifcaIcms: pDifcaIcms[indice],
         vprod: parseFloat(vprod.vprod[indice]),
         ipi: parseFloat(vlrIpi[indice]),
         icmsst: parseFloat(vlrIcmsSubst[indice]),
         vDifcaIcms: 1 * (parseFloat(vprod.vprod[indice]) * ((pDifcaIcms[indice]) / 100)).toFixed(2),
         custoTotal: 1 * (parseFloat(vprod.vprod[indice]) + parseFloat(vlrIpi[indice]) + parseFloat(vlrIcmsSubst[indice]) + ((parseFloat(vprod.vprod[indice]) * ((pDifcaIcms[indice]) / 100)))).toFixed(2),
         custoUn: 1 * (((parseFloat(vprod.vprod[indice]) + parseFloat(vlrIpi[indice]) + parseFloat(vlrIcmsSubst[indice]) + ((parseFloat(vprod.vprod[indice]) * ((pDifcaIcms[indice]) / 100))))) / (parseFloat(qcom.qcom[indice]))).toFixed(2),
       };
       return row;
     });   
     
   //console.log(typeof nfList);  
      //Fim Criando novo oobjeto nfList com atributos calculados.
 /*-------------------------------------------------------*/
        /*Atualiza o state*/
        this.setState({
          products: this.state.products.concat(nfList),
          nfs: this.state.nfs.concat(nNF),
          companies: this.state.companies.concat(xNome),
        });
        /*Fim Atualiza o state*/       
       // console.log(this.state.nfs);
    }
    /*FIm incio CreateNF*/

    /* Inicio processXML*/
    processXML = (file) => {
        axios.get(file.preview, {responseType: 'document'})
        .then((response) => this.createNF(response.data));    
     }

    /* Fim processXML*/


    updateFile = (id, data) => {
        this.setState({ uploadedFiles: this.state.updateFiles.map(updateFile => 
            {
            return id === uploadedFile.id 
            ? {... uploadedFile, ...data} 
            : uploadedFile;
        })
    });

    };

    processUpload = (uploadedFile) => {
        const data = new FormData();
        data.append('file', uploadedFile.file, uploadedFile.name)
        api.post('post', data, {
            onDownloadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total));

                this.uploadedFile(this.updateFile.id, {
                    progress,
                });
            }
        }).then(response => {
            this.uploadedFile(uploadedFile.id, {
                uploaded: true,
                id: response.data._id,
                url: response.data.url,
            })
        }).catch(() => {
            this.uploadedFile(uploadedFile.id, {
                error: true,              
            })
        })
    }

    componentWillUnmount(){
        this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    }

    handleDelete = async id => {
        await api.delete(`post/${id}`);
        this.setState({
            updateFiles: this.state.uploadedFiles.filter(file => file.id !== id),
        })
    }
    render(){
        const { uploadedFiles, nfs, products, companies } = this.state;             
        return(
            <Container>
                <Left>
                  <Upload  onUpload={this.handleUpload}/>
                  { !!nfs.length && (
                      <div>
                        <CompaniesList companies={companies} />
                         <NFList nfs={nfs} />
                      </div>
                   )}
                </Left>  
                <Content>                    
                    { !!products.length && (
                        <ProductsList products={products} />
                   )}                                                 
                </Content>
              
                <GlobalStyle />
            </Container>
            );

    }
  
}

export default Home
