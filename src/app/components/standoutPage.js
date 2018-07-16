import React from 'react';
import Nav from './navigation/navigation';
import './standout.scss'

class Standout extends React.Component{
  render(){
    return(
      <div>
        <Nav navigation={navigationElements} />
        <div id="home" className="welcome dummy">
          <div className=" dummy overlay">
            <h1>Welcome</h1>
          </div>
        </div>

        <div id="about" className="about dummy">
          <h1>Welcome</h1>
        </div>

        <div id="service" className="service dummy">
          <h1>Welcome</h1>
        </div>

        <div id="portfolio" className="portfolio dummy">
          <h1>Welcome</h1>
        </div>

        <div id="testimonials" className="testimonials dummy">
          <h1>Welcome</h1>
        </div>
      </div>
    )
  }
}
export default Standout

const navigationElements={
  //links are important to have no default specified
  links:{
    names:["about", "service", "portfolio", "testimonials",
    {
      title: "dropdown",
      names: ["hello", "world"]
    },
     "home",

  ],
    styles:{
      color:"rgba(255,255,255,0.8)",
      hover:"#a21f1f"
    }
  },
  //if none specified no show
  brand:"standout",
  //if none specified default is transparent as described by css
  background:"transparent",
  isScrolling:"#07003e",
  itemListBackground: "#07003e"
}
