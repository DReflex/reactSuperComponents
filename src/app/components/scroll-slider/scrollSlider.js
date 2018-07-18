import React from 'react';
import './scrollSlider.scss'
class ScrollSlider extends React.Component{
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);

  }
  componentDidMount(){
    document.addEventListener("scroll", this.handleScroll)

  }
  componentWillUnmount(){
    document.removeEventListener("scroll", this.handleScroll)

  }
  handleScroll(){
    checkElement("scrollSlider")
  }
  render(){
    return(
      <div id="scrollSlider" style={{height: `${window.innerHeight}px`}} className="scrollSlider">
          <button onClick={()=>document.body.style.overflow = ""}>Scroll</button>
      </div>
    )
  }
}
export default ScrollSlider
//
function checkElement(id){
  const window_top_position = window.pageYOffset;
  let element = document.getElementById(id);
  if(element){

    let elem_height = element.offsetHeight;
    let elem_top = element.offsetTop;
    let elem_bottom = elem_top + elem_height;
    if((elem_bottom >= window_top_position) && (elem_top <= window_top_position)){
      window.scrollTo(0, elem_top)
      document.body.style.overflow = "hidden"
    }else{
      document.body.style.overflow = ""
    }
  }
}
