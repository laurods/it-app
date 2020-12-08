import React from "react";
import NFCard from './NFCard';

class FileInput extends React.Component {
  constructor() {
    super();
    this.state = {
      nf: [],
      data: [],
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }

  /*xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx*/

  handleSubmit (url)  {
    const nf = url;
    //const nf = this.fileInput.current.files[0].name;    
    //nfAPI.getData(file);
    var xhr = new XMLHttpRequest()
    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      // Já tem o XML
      const nf = xhr.responseXML
      const items = [];
      const Det = nf.getElementsByTagName('det');
      const xProd = nf.getElementsByTagName("xProd");
      const uCom = nf.getElementsByTagName("uCom");
      const qCom = nf.getElementsByTagName("qCom");
      const pICMS = nf.getElementsByTagName("pICMS");
      const vProd = nf.querySelectorAll("prod vProd");
      const cEAN = nf.getElementsByTagName("cEAN")//Codigo de barras da caixa
      const cEANTrib = nf.getElementsByTagName("cEANTrib");// codigo de barras do produto que está dentro da caixa
      
      /*-------------------------------------------------------*/
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
  /*-------------------------------------------------------*/
  /*-------------------------------------------------------*/
  // Calculando Diferença de ICMS
  const pIcmsRS = 18
  const pDifcaIcms = [];
  for (let index = 0; index < pICMS.length; index++) {
    pDifcaIcms.push(pIcmsRS - parseFloat(pICMS[index].innerHTML));
    //console.log(`indice : ${index} - diferença: ${pDifcaIcms}`)
  }
  /*-------------------------------------------------------*/
      // Criando objeto para nota fiscal
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
      /*-------------------------------------------------------*/
      //Criando novo oobjeto theNF com atributos calculados.
      const nfList = det.det.map((produto, indice) => {
        const row = {
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

      //console.table(nfList);
     
      /*-------------------------------------------------------*/
      //ATUALIZAR O STATE
      this.setState({
        data: nfList,
        nf : nf,
      })

    })
    xhr.open('GET', `${nf}`)
    // send the request
    xhr.send()
  }

  render() {
   const {nf, data} = this.state;
   const files = this.props.files;
   if(files.length > 0){
    files.forEach(file => {     
      this.handleSubmit(file.preview);
    });
   }
 
  
    return (
      
      (
        <div>        
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
