import React from 'react';
import Branding from './branding';
import Items from './items'
import './mainNav.scss'

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.state={
      listLinks: false,
    }
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleBigMac = this.handleBigMac.bind(this);
  }
  componentDidMount(){
    this.handleScroll()
    document.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount(){
    document.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll(e){
    let id = document.getElementById("nav");
    let dropdown = document.getElementById("myDropdown");
    let linkList = document.getElementById("navLinks");
    let scroll =window.pageYOffset;
    if(scroll > 0){
      dropdown.style.background = this.props.navigation.isScrolling
      id.style.background = this.props.navigation.isScrolling;
      id.style.height= "50px"
      linkList.style.marginTop ="50px"
      linkList.style.background = this.props.navigation.itemListBackground

    }
    else{
      id.style.background = this.props.navigation.background;
      dropdown.style.background = this.props.navigation.background
      id.style.height= "80px"
      linkList.style.marginTop ="80px";
      linkList.style.background = this.props.navigation.itemListBackground



    }
    this.props.navigation.links.names.forEach((name) =>checkElement(name))
  }

  handleHover(e){
    const style =this.props.navigation.links.styles;
    e.target.style.color = style.hover
  }
  handleLeave(e){
    const style =this.props.navigation.links.styles;
    e.target.style.color = style.color
  }
  handleBigMac(e){
    this.setState({
      listLinks: !this.state.listLinks,
    });
    const id = document.getElementById("navLinks");
    (!this.state.listLinks)? (id.style.transform ="translateX(0)"):(id.style.transform ="translateX(400px)")
  }


  render(){

    return(
      <div id="nav" className="nav">
          <Branding
            brand={this.props.navigation.brand}
             />
          <Items
            linkNames={this.props.navigation.links.names}
            handleHover={this.handleHover}
            handleLeave={this.handleLeave}
            listLinks ={this.state.listLinks}
            />
          <BigMac
            handleBigMac={this.handleBigMac}
            />
      </div>
    )
  }
}
export default Nav


function BigMac (props){
  return(
  <div className="big-mac">
    <input onClick={(e)=>props.handleBigMac(e)} type="checkbox" />
    <span></span>
    <span></span>
    <span></span>
  </div>
  );
}



function checkElement(id){
  const window_top_position = window.pageYOffset + 60;
  let element = document.getElementById(id);
  let nav_element = document.getElementById("nav-"+id)
  if(element){

    let elem_height = element.offsetHeight;
    let elem_top = element.offsetTop -50;
    let elem_bottom = elem_top + elem_height;
    if((elem_bottom >= window_top_position) && (elem_top <= window_top_position)){
      nav_element.style.color= "#a21f1f"
    }else{
      nav_element.style.color="#FFF"
    }
  }
}
