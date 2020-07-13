import React, {useState} from "react";
import s from './Counter.module.css';

export function Counter() {
    let [count, setCount] = useState(0);
    const maxValue = () => {
        let maxValueStyle = '';
        if (count === 5) {
            maxValueStyle = s.active;
        }
        return maxValueStyle;
    }
    return (
        <div className={s.counter}>
            <div className={s.counterDisplay + ' ' + maxValue()}>
                {count}
            </div>
            <div className={s.counterButtons}>
                <button onClick={() => setCount(count + 1)}
                        disabled={count === 5}>
                    Push me!
                </button>
                <button onClick={() => setCount(0)} disabled={count === 0}>
                    Reset
                </button>
            </div>
        </div>
    )
}