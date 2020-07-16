import React, {useState} from 'react';
import './App.css';
import {Counter} from "./Counter/Counter";
import {CounterModifier} from "./CounterModifier/CounterModifier";

function App() {
    let [min, setMin] = useState<number>(0)
    let [max, setMax] = useState<number>(5)
    let [error, setError] = useState<boolean>(false)

    return (
        <div className="App">
            <CounterModifier min={min} max={max} setMin={setMin} setMax={setMax} setError={setError} error={error}/>
            <Counter min={min} max={max}/>
        </div>
    );
}

export default App;
