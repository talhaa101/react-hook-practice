import { useState } from "react";

function CounterWithObject() {
  const [details, setDetails] = useState({
    counter: 0,
    name: ""
  });

  function incrementCounter() {
    setDetails(prev => ({
      ...prev,
      counter: prev.counter + 1
    }));
  }

  return (
    <div>
      <h1>Counter: {details.counter}</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={details.name}
        onChange={(e) =>
          setDetails(prev => ({
            ...prev,
            name: e.target.value
          }))
        }
      />

      <h1>
        {details.name || "User"} has clicked {details.counter} times!!!
      </h1>

      <button onClick={incrementCounter}>
        Increment +1
      </button>
    </div>
  );
}

export default CounterWithObject;
