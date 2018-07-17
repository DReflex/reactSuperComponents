import React from "react";

function Branding(props){
  return(
    <div style={{fontFamily: props.brand.fontFamily}} id="navigationBrand" className="brand">
      {(props.brand.logo) ? <img src={props.brand.logo} alt="#_#" />:"" }
      <h2>{props.brand.title}</h2>
    </div>
  )
}

export default Branding
