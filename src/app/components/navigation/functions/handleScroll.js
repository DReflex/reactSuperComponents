import React from "react";
import smoothscroll from 'smoothscroll-polyfill';


export const handleClickScroll = (e, selector, setState, stateFunction) => {
  e.preventDefault()
  let id= document.getElementById(selector).offsetTop
  window.scroll({ top: id-50, left: 0, behavior: 'smooth' });
  const navLinks = document.getElementById("navLinks")
    stateFunction;



}
