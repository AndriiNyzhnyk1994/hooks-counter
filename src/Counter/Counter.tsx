import React, {useState} from "react";
import s from './Counter.module.css';

type CounterType = {
    min: number
    max: number
}

export function Counter(props: CounterType) {
    let [count, setCount] = useState(props.min);
    let [isLimit, setIsLimit] = useState(false);

    function inc() {
        let n = count + 1;
        if (n > props.max) {
            setIsLimit(true);
        }
        setCount(n);
    }
    function reset() {
        setCount(props.min);
        setIsLimit(false);
    }

    const maxValue = () => {
        let maxValueStyle = '';
        if (count === props.max) {
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
                        disabled={count === props.max}>
                    Push me!
                </button>
                <button onClick={reset} disabled={count === 0}>
                    Reset
                </button>
            </div>
        </div>
    )
}