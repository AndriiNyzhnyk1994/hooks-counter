import React, {useState} from "react";
import s from './CounterModifier.module.css';

type ModifierType = {
    min: number
    max: number
    setMin: (num: number) => void
    setMax: (num: number) => void
    setError: (b: boolean) => void
    error: boolean
}

export function CounterModifier(props: ModifierType) {

    let [active, setActive] =useState(false);

    if(props.min >= props.max || props.min < 0) {
        props.setError(true);
    } else{
        props.setError(false);
    }

    let inputStyle ={
        color: props.error ? 'red' : 'black'
    }


    return (
        <div className={s.modifier}>
            <div className={s.maxValue}>
                <div className={s.label}>max value:</div>
                <input style={inputStyle} type="number" value={props.max} onChange={(e) => {props.setMax(Number(e.currentTarget.value))}}/>
            </div>
            <div className={s.minValue}>
                <div className={s.label}>min value:</div>
                <input style={inputStyle} type="number" value={props.min} onChange={(e) =>{props.setMin(Number(e.currentTarget.value))}}/>
            </div>
            <div className={s.setValue}>
                <button className={s.setButton}>set</button>
            </div>
        </div>
    )
}