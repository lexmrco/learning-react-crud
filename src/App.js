import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CustomerIndex from './components/customers';
import LoginIndex from './components/login';
import LoginRegister from './components/login/register';
import CustomerCreate from './components/customers/create';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginIndex}/>
        <Route exact path="/register" component={LoginRegister}/>
        <Route exact path="/customers" component={CustomerIndex}/>
        <Route exact path="/Create" component={CustomerCreate}/>
      </Switch>
    </Router>
  );
}

export default App;
