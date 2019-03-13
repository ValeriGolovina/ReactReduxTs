import React, { Component } from 'react';
import Filter from "./components/filter/Filter";
import CardsList from "./components/cardsList/CardsList";
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Filter />
        <CardsList />
      </div>
    );
  }
}

export default App;
