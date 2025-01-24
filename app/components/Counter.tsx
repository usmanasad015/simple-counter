"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../store";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../features/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState<number>(2);

  return (
    <div className="p-4 max-w-sm w-full mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Counter: {count}</h2>

      {/* Buttons */}
      <div className="flex flex-col space-y-3">
        <div className="flex justify-center space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>

        {/* Input and Add Amount Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-x-2 sm:space-y-0">
          <input
            type="number"
            value={incrementAmount}
            onChange={(e) => setIncrementAmount(Number(e.target.value))}
            className="border-2 border-gray-300 bg-white h-10 px-4 rounded-lg text-sm focus:outline-none w-full sm:w-auto"
          />
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
            onClick={() => dispatch(incrementByAmount(incrementAmount))}
          >
            Add Amount
          </button>
        </div>
      </div>
    </div>
  );
}
