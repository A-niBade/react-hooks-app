import { useCounter } from "../hooks/useCounter";

export const CounterCustomHook = () => {
  const { counter, increment, sustract, reset } = useCounter();

  return (
    <>
      <h1>Counter Custom Hook: {counter}</h1>
      <hr />

      <button className="btn btn-primary" onClick={() => increment(2)}>
        +2
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => sustract(2)}>
        -2
      </button>
    </>
  );
};
