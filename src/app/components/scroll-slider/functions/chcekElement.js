import React from "react";
export const checkElement =(id) =>{
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
