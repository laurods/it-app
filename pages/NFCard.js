import React, { useState} from 'react';
class NFCard extends React.Component {
  constructor() {
    super();
  
    this.showDetails = this.showDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
  }

  showDetails(e){
    const details = e.target.parentNode.lastElementChild;
    details.style.display = 'block';    
   }
   hideDetails(e){
    const details = e.target.parentNode.lastElementChild;
    details.style.display = 'none';    
  }
  
  render() {  
    const {
      cean,
      ceantrib,      
      xprod,
      ucom,
      qcom,
      picms,
      perDifcaIcms,
      vprod,
      ipi,
      icmsst,
      vDifcaIcms,
      custoTotal,
      custoUn,
     } = this.props.nf;
    return (
      <div className="NF-Card">  
          <tr /*onMouseEnter={this.showDetails} onMouseLeave={this.hideDetails}*/>
            <td className="xprod">{xprod}</td>
            <td className="custoUn">{custoUn}</td>
           
            <div className="nf-card-details">
              <div className="nf-card-details-top">
                <input className="nf-card-details-input-xprod" type='text' value={xprod}></input>
              </div>

              <div className="nf-card-details-left">
              <div className="nf-card-details-item">
                <span> Valor Produtos : {vprod}</span>
                <br/>
                <span> Valor IPI: {ipi}</span>
                <br/>
                <span>Dif. Icms: {vDifcaIcms}</span>
                <br/>
                <span>Subs.Trib: {icmsst}</span>
                <br/>
                <span>Custo Total: {custoTotal}</span>
                <br/>
                <span>Quant: {qcom} {ucom}</span>
              </div>
              </div>

              <div className="nf-card-details-right">
              <div className="nf-card-details-input">
                <div className="nf-card-details-input-cx">
                  Cod. Caixa
                  <input className="nf-card-details-input-default" type='text' value={cean}></input>
                  Quant.
                  <input className="nf-card-details-input-default" type='text' value={qcom}></input>
                </div>
                <div className="nf-card-details-input-item">
                Cod. Item
                <input className="nf-card-details-input-default"type='text' value={ceantrib}></input>
                Quant.
                <input className="nf-card-details-input-default" type='text' value='0'></input>
                </div>              
               
              </div>
              </div>
              <div className="nf-card-details-button">
                <button>Salvar</button>
              </div>      
            </div>
                        
          </tr>
          
             
      </div>
    );
  }
}
export default NFCard;
