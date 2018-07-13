import React from "react";
import { handleClickScroll } from './functions/handleScroll'

function Items(props){
  const height = window.innerHeight
  console.log(height);
  const linkNames = props.linkNames;
  const listItems = linkNames.map((item, num) =>{
    let id = "nav-"+ item
    return(
      (typeof item === "string")? (
        <a id={id} key={num}
          onMouseOver={(e) => props.handleHover(e)}
          onMouseLeave={(e) => props.handleLeave(e)}
          onClick = {(e) => handleClickScroll(e, item)}
          >
          {item}
        </a>
      ): <Dropdown
            title={item.title}
            linkNames={item.names}
            handleHover={props.handleHover}
            handleLeave = {props.handleLeave}
            key={num}
          />
    );
  }

  );
  return(
    <div style={{height:height}} id="navLinks" className="nameItems">
      {listItems}
    </div>
  )
}
export default Items

function Dropdown (props) {

  const handleClick = (e) =>{
    e.preventDefault()
    const id = document.getElementById("myDropdown");
    (id.style.display === "none")? id.style.display= "flex" : id.style.display="none"
  }
  const listItems = props.linkNames.map((item, num)=>
      <a
        onMouseOver={(e) => props.handleHover(e)}
        onMouseLeave={(e) => props.handleLeave(e)}
        onClick = {(e) => handleClickScroll(e, item)}
        key={num +1000} href ="#">
        {item}
      </a>
    )
  return(
    <div className="dropdown">
      <a href=""
        onMouseOver={(e) => props.handleHover(e)}
        onMouseLeave={(e) => props.handleLeave(e)}
        onClick = {handleClick}
        >
        {props.title} <i className="fas fa-angle-down"></i>

        </a>
        <div style={{display:"none"}} id="myDropdown" className="dropdown-content">
          {listItems}
        </div>
    </div>
  )
}
