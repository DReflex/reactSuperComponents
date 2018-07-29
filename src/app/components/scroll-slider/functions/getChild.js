import React from "react"
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
