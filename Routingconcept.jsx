 import './App.css';
import React from 'react';
import { BrowserRoute, Switch, Route } from 'react-route-dom'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Dashbord from './Components/Dashbord';
import About from './Components/About';
import Registratioform from './Components/Registratioform';
const Routingconcept= () => {
  return (
    <React.Fragment>
      <BrowserRoute>
        <Navbar />
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/dash'  component={Dashbord} />
          <Route path='/about'  component={About} />
          <Route path="/registration" componen={Registratioform} ></Route>
        </Switch>
      </BrowserRoute>



    </React.Fragment>
  );
};

export default Routingconcept;
