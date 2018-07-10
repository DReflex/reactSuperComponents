import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Standout from './components/standoutPage'


class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Standout} />
        </Switch>
      </main>
    )
  }
}
export default Main
