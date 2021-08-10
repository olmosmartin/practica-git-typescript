import React from 'react';
import './App.css';
import ContadorVista from './views/ContadorVista';
import Inicio from './views/Inicio';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UsuarioVista from './views/UsuarioVista';
import Navbar from './components/Navbar';
import { FormularioVista } from './views/FormularioVista';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/contador" component={ContadorVista} />
          <Route exact path="/usuario" component={UsuarioVista} />
          <Route exact path="/form" component={FormularioVista} />

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
