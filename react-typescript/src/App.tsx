import React from 'react';
import './App.css';
import Contador from './components/Contador';
import Inicio from './views/Inicio';
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        nav
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/contador" component={Contador} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
