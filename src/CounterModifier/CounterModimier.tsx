import React from "react";
import s from './CounterModifier.module.css';

export function CounterModifier() {
    return (
        <div className={s.modifier}>
            <div className={s.maxValue}>
                <div className={s.label}>max value:</div>
                <input type="number"/>
            </div>
            <div className={s.minValue}>
                <div className={s.label}>min value:</div>
                <input type="number"/>
            </div>
            <div className={s.setValue}>
                <button className={s.setButton}>set</button>
            </div>
        </div>
    )
}