import { useState } from "react";

interface counterProps{
    count: number;
    incrementCount: () => void;
    decrementCount: () => void;
}

const Counter = (initialCount: number ) : counterProps => {
    const [count, setCount] = useState(initialCount);

    const incrementCount = () => {
        setCount((prev)=> prev +1)
    }
    const decrementCount = () => {
        setCount((prev)=> prev -1)
    }

    return {count, incrementCount, decrementCount}
}
export default Counter