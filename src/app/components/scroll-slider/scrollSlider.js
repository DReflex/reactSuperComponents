import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { checkElement, getChild } from "./functions";
import SubComponent from './subComponent';
import SliderNavigation from './sliderNavigation';
import './scrollSlider.scss'
class ScrollSlider extends React.Component{
  constructor(props){
    super(props);
    this.state={
      items:[],
    }
    this.handleScroll = this.handleScroll.bind(this);

  }
  componentDidMount(){
    document.addEventListener("scroll", this.handleScroll);
    document.getElementById("about").style.height = `${window.innerHeight * this.props.slider.items.length}px`
    let sliderItems = this.props.slider.items;
    const items = sliderItems.map((element) => {
        let singleItem = {
          title: element.title,
          transform: "translate3d(-100%, 0,0)"
        }
      return singleItem
    })
    this.setState({
      items: items,
    })
  }
  componentWillUnmount(){
    document.removeEventListener("scroll", this.handleScroll)

  }
  handleScroll(e){
    let check = checkElement("scrollSlider");
    if(check){
      const element = getChild()
      const controller = document.getElementById("controller")

      this.setState(
        (state) =>{
        let new_items = state.items.map((item) => {
          if(item.title === element.id){
            return {
              ...item,
              transform:"translate3d(0,0,0)"
            }
          }else{
            return{
              ...item,
              transform:"translate3d(-100%, 0,0)"
            }
          }

        })
        return{
          ...state,
          items:new_items
        };
      })
      controller.style.transform = `translate3d(${controller.offsetWidth * element.num}px,0,0)`

    }



  }

  render(){
    let sliderItems = this.state.items;
    return(
      <div id="scrollSlider" style={{height: `${window.innerHeight - 60}px`}} className="scrollSlider">
          <div id="componentContainer" className="componentContainer">
              {sliderItems.map((item, key) => <SubComponent style={{transform: item.transform}} id={item.title} key={key} text={item.title} />)}
          </div>

          <div className="slider-navigation">
            <SliderNavigation items={sliderItems}/>
          </div>
      </div>
    )
  }
}
export default ScrollSlider
//
