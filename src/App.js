import './App.css';
import React from 'react';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Forward from './components/pages/Forward';
import MidFielder from './components/pages/MidFielder';
import Defender from './components/pages/Defender';
import GoalKeeper from './components/pages/GoalKeeper';
import Comparison from './components/pages/Comparison';
import Wishlist from './components/pages/Wishlist';
import AboutUs from './components/pages/AboutUs';
import Players from './components/pages/Players';
import Info from './components/pages/Info';
import CompareInfo from './components/pages/ComapreInfo';
import LoginMain from './components/pages/LoginMain';
import Logout from './components/pages/Logout';
import fire from './components/pages/fire';




class App extends React.Component {
  componentDidMount(){
    fire.auth().signOut();
  }
  render(){
  return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path='/' exact component={LoginMain} />
        <Route path='/Home' exact component={Home} />
        <Route path='/Forward' exact component={Forward} />
        <Route path='/MidFielder' exact component={MidFielder} />
        <Route path='/Defender' exact component={Defender} />
        <Route path='/GoalKeeper' exact component={GoalKeeper} />
        <Route path='/Comparison' exact component={Comparison} />
        <Route path='/Wishlist' exact component={Wishlist} />
        <Route path='/AboutUs' exact component={AboutUs} />
        <Route path='/Players' exact component={Players} />
        <Route path='/Info' exact component={Info} />
        <Route path='/CompareInfo' exact component={CompareInfo} />
        <Route path='/Logout' exact component={Logout} />
      </Switch>
    </Router>
  );
  }
}

export default App;