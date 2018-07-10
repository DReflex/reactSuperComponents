const stateInit ={
test: Boolean,



}
const Test = (state = stateInit, action)=>{
  switch(action.type){
    case "START":
    return{
      ...state,
      xStart: action.xStart
    }
  
    default:
    return state


  }
}
export default Test
