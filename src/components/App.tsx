import React, { Component } from 'react';
import '../App.css';
import FilterableCards from "./filterableCards/FilterableCards";

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableCards />
      </div>
    );
  }
}

export default App;
