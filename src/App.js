import React, { Component } from 'react';
import FormUser from './containers/FormUser'
import DatosUser from './containers/DatosUserConteiner'
import { HashRouter as Router, Route, NavLink as Link } from 'react-router-dom'
import history from './history'
import logo from './logo.svg';
/* import FormExample from './containers/DailyCalories/index'
 */
import ContainerComponent from './components/ContainerComponent'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
/* import MyAwesomeReactComponent from './MyAwesomeReactComponent'; */
import './App.css';
class App extends Component {
    render() {
        return ( <Router history={history}>
            <MuiThemeProvider > { /* <MyAwesomeReactComponent /> */ } <div className = "container-fluid col-sm-4" >
              {/*<Route exact path = "/" component = { ContainerComponent }/>*/} 
              <Route exact path = "/" component = { FormUser }/>
              <Route exact path = "/datosUser" component = { DatosUser }/>
              </div> 

            </MuiThemeProvider> 
            </Router>
        );
    }
}

export default App;