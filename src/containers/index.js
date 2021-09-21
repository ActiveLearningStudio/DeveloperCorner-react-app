import React from 'react';
import Header from '../components/Header/header';
import Home from '../containers/home/index';
import Footer from '../components/footer/index';
import CurrikiArchitecture from './currikiarchitecture/index';
import DatabaseSchemas from './databaseschemas';
import DeployingTheCurrikiPlatfrom from './deployingthecurrikiplatfrom';
import CurrikiForum from './currikiforum';
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
     <Route exact path="/databaseschemas">
      <DatabaseSchemas />
     </Route>
     <Route exact path="/deployingthecurrikiplatfrom">
      <DeployingTheCurrikiPlatfrom />
     </Route>
     <Route exact path="/currikiforum">
      <CurrikiForum />
     </Route>
    </Switch>
    <Footer />
   </Router>
  </>
 );
};

export default Index;
