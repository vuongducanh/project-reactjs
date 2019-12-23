import  React, { Component } from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Footer from './components/layout/footer/footer'
import Header from './components/layout/header/header'
import SideBar from './components/layout/side-bar/side-bar'
import About from './components/about/about'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <Header></Header>
        <div className="app-body">
          <SideBar></SideBar>
          <div className="app-main">
            <Switch>
                <Route exact path="/">
                  Home
                </Route>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/dashboard">
                  Dashboard
                </Route>
            </Switch>
          </div>
        </div>

        <Footer></Footer>
      </Router>
    )
  }
}

export default App;
