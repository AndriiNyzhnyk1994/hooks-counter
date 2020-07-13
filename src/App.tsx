import React from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CounterModifier} from "./CounterModifier/CounterModimier";

function App() {

  return (
    <div className="App">
        <CounterModifier />
        <Counter/>

    </div>
  );
}

export default App;
