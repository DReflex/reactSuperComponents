import React from 'react';
import './mainNav.scss'

class Nav extends React.Component{
  constructor(props){
    super(props)
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this)
  }
  componentDidMount(){
    console.log(this.props.navigation.links.names);
  }
  handleHover(e){
    const style =this.props.navigation.links.styles
    e.target.style.color = style.hover
  }
  handleLeave(e){
    const style =this.props.navigation.links.styles
    e.target.style.color = style.color
  }
  render(){
    return(
      <div id="nav" style={{background:this.props.navigation.background}} className="nav">
          <Branding
            brand={this.props.navigation.brand}
             />
          <Items
            linkNames={this.props.navigation.links.names}
            handleHover={this.handleHover}
            handleLeave = {this.handleLeave}
            />
      </div>
    )
  }
}
export default Nav


function Branding(props){
  return(
    <div className="brand">
      <h2>{props.brand}</h2>
    </div>
  )
}
function Items(props){
  const linkNames = props.linkNames;
  const listItems = linkNames.map((item, num) =>
    <a href={"#" +item} key={num}
      onMouseOver={(e) => props.handleHover(e)}
      onMouseLeave={(e) => props.handleLeave(e)}
      >
      {item}
    </a>
  );
  return(
    <div className="nameItems">
      {listItems}
    </div>
  )
}
