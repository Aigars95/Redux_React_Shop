import React, { useState } from 'react';

type CounterProps = {
  getCount: (count: number) => void;
  initialCount: number
}

const Counter = ({ getCount, initialCount }: CounterProps) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount(count + 1);

    getCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
      getCount(count - 1);
    }
  };
  return (
    <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
  );
};

export default Counter;
