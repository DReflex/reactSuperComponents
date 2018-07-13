import React from "react";
import smoothscroll from 'smoothscroll-polyfill';


export const handleClickScroll = (e, selector) => {
  e.preventDefault()
  let id= document.getElementById(selector).offsetTop
  window.scroll({ top: id-50, left: 0, behavior: 'smooth' });

}
