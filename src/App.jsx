
import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Tokenaddress from './components/Tokenaddress';
import Tokenlist from './pages/Tokenlist';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Pairlist from './pages/Pairlist';

function App() {
  
  
  return (
    
    <Router>
      <div className="App">
      <Switch>
        <Route exact path='/'>
        <Tokenlist />
        </Route>
        <Route path='/pairlist'>
          <Pairlist />
        </Route>
      </Switch>
      </div>
    </Router>
     
    
  );
}

export default App;
