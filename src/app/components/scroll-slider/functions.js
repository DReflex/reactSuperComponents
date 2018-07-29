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


export const  getChild = () =>{
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
