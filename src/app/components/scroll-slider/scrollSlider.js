import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
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
    console.log(sliderItems);
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
function getChild(){
  const element = document.getElementById("about");
  const current_scroll_position = window.scrollY - element.offsetTop;

  const id = document.getElementById("componentContainer")
  const child_nodes = id.childNodes
  for (let i = 1; i < child_nodes.length +1; i++) {
    if(current_scroll_position <= window.innerHeight * i){
      return {
        id:child_nodes[i -1].id,
        num: i -1
      }

    }
    else{
      child_nodes[i-1].style.transform = "translate3d(100%, 0,0)"
    }

  }

}
function checkElement(id){
  const window_top_position = window.pageYOffset;
  let element = document.getElementById("about");
  let slider = document.getElementById(id)
  if(element){

    let elem_height = element.offsetHeight;
    let elem_top = element.offsetTop;
    let elem_bottom = elem_top + elem_height;
    if((elem_bottom >= window_top_position) && (elem_top <= window_top_position)){
      slider.style.position = "fixed"
      return true
    }else{
      slider.style.position= "relative"
      return false
    }
  }
}
function SubComponent (props){

  return(
    <div id={props.id} style={props.style} className="subComponent">
      <h1>{props.text}</h1>

    </div>
  )
}
function SliderNavigation (props){
  const LEN = props.items
  const handleClick = (num) =>{
    const element = document.getElementById("about");
    let scrollValue= element.offsetTop + 50 + (num * window.innerHeight);
    window.scroll({ top: scrollValue, left: 0, behavior: 'smooth' });


  }
  const SliderComponent = (num) =>{
    const SCRR = (num) =>{

    }
    return(
      <div className="slider-component">
        <div onClick={() => (!isNaN(num.num))? handleClick(num.num):console.log(0)} className="circle"></div>
        <div className="line"></div>
      </div>
    )
  }
  return(
    <div>
      <div className="slider-outliner">
        {LEN.map((item, num) => <SliderComponent key={num} num={num} />)}
        <div id="controller" className="slider-controller">
          <SliderComponent />
        </div>
      </div>
    </div>
  )
}
