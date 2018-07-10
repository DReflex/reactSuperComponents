import React from 'react';
import Nav from './navigation/navigation';

class Standout extends React.Component{
  render(){
    return(
      <div>
        <Nav navigation={navigationElements} />
      </div>
    )
  }
}
export default Standout

const navigationElements={
  //links are important to have no default specified
  links:{
    names:["about", "services", "galery", "testimonials", "contact"],
    styles:{
      color:"rgba(255,255,255,0.8)",
      hover:"#a21f1f"
    }
  },
  //if none specified no show
  brand:"standout",
  //if none specified default is transparent as described by css
  background:"transparent",
}
