import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Standout from './components/standoutPage'
import ScrollPage from './components/scrollPage'

class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Standout} />
          <Route path='/scroll' component={ScrollPage} />
        </Switch>
      </main>
    )
  }
}
export default Main
