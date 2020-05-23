import React from "react";
import "./App.scss";
import "./variables.scss";
import NavBar from "./components/layout/navBar/NavBar";
import Dashboard from "./components/layout/dashboard/Dashboard";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PokemonInfo from "./components/UI/pokemonInfo/PokemonInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div className="container">
          <Switch>
            <Route render={() => <Dashboard />} exact path="/" />
            <Route component={PokemonInfo} path="/pokemon/:pokemonId" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
