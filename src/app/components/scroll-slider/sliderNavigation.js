import React from "react"

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
        <div onClick={() => (!isNaN(num.num))? handleClick(num.num):console.log("sayyum")} className="circle"></div>
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
export default SliderNavigation
