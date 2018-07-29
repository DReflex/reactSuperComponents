import React from 'react';

function SubComponent (props){

  return(
    <div id={props.id} style={props.style} className="subComponent">
      <h1>{props.text}</h1>

    </div>
  )
}

export default SubComponent
