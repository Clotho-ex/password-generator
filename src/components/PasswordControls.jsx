import React from "react";

const PasswordControls = ({
  length = 10,
  setLength = () => {},
  options = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
  },
  setOptions = () => {},
}) => {
  return (
    <fieldset className="space-y-4">
      <legend className="sr-only">Password Options</legend>

      <div className="space-y-2">
        <div className="flex justify-between">
          <label htmlFor="length" className="text-slate-200">
            Character Length
          </label>
          <output
            htmlFor="length"
            className="text-green-400 font-mono text-xl font-bold">
            {length}
          </output>
        </div>
        <input
          id="length"
          type="range"
          min="4"
          max="20"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          className="w-full accent-green-400 h-4 rounded-lg appearance-none cursor-pointer bg-slate-900"
        />
      </div>

      <fieldset className="space-y-2">
        <legend className="sr-only">Character Types</legend>
        {Object.entries(options).map(([key, value]) => (
          <label
            key={key}
            className="flex items-center space-x-4 text-slate-200">
            <input
              type="checkbox"
              id={key}
              checked={value}
              onChange={(e) =>
                setOptions((prev) => ({
                  ...prev,
                  [key]: e.target.checked,
                }))
              }
              className="w-5 h-5 accent-green-400"
            />
            <span className="capitalize">{key}</span>
          </label>
        ))}
      </fieldset>
    </fieldset>
  );
};

export default PasswordControls;
