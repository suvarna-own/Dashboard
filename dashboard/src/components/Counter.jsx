import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>{count}</h2>

      <button className="border-purple-200 border-2 rounded-md px-4 py-2 text-purple-600 font-semibold hover:bg-blue-100 transition-colors duration-300"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}


