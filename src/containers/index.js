import React from 'react';
import Header from '../components/Header/header';
import Home from '../containers/home/index';
import CurrikiArchitecture from './currikiarchitecture/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Index = () => {
 return (
  <>
   <Router>
    <Header />
    <Switch>
     <Route exact path="/">
      <Home />
     </Route>
     <Route exact path="/currikiarchitecture">
      <CurrikiArchitecture />
     </Route>
    </Switch>
   </Router>
  </>
 );
};

export default Index;
