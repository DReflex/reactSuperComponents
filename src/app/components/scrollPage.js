import React from 'react';
import ScrollSlider from './scroll-slider/scrollSlider'
import './scrollPage.scss'

class ScrollPage extends React.Component{
  render(){
    return(
      <div>
        <div id="home" className="welcome dummy">
          <div className=" dummy overlay">
            <h1>Welcome</h1>
          </div>
        </div>

        <div id="about" className="about dummy">
          <h1>Welcome</h1>
          <ScrollSlider />
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
export default ScrollPage
