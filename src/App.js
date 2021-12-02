import './App.css';
import Create from './components/Create';
import React from "react";
import { BrowserRouter ,Route, Switch } from 'react-router-dom';
import Validate from './components/Validate';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>

          <Route exact path="/" component={Validate} />
          <Route exact path="/Create" component={Create}/>
        
      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
