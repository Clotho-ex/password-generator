import React from "react";

const StrengthIndicator = ({ strength = 0 }) => {
  const strengthConfig = {
    0: { label: "TOO WEAK !", color: "#F64A4A" },
    1: { label: "WEAK", color: "#FB7C58" },
    2: { label: "MEDIUM", color: "#F8CD65" },
    3: { label: "STRONG", color: "#A4FFAF" },
    4: { label: "STRONG", color: "#A4FFAF" },
  };

  const { label, color } = strengthConfig[strength];

  return (
    <section
      className="bg-[#0F172A] p-4 flex items-center justify-between rounded-lg shadow-md"
      aria-label="Password Strength Indicator">
      <h2 className="text-slate-400 font-bold">STRENGTH</h2>
      <div
        className="flex items-center space-x-2"
        role="status"
        aria-live="polite">
        <output className="text-slate-200 uppercase font-bold">{label}</output>
        <div
          className="flex space-x-1"
          role="meter"
          aria-valuenow={strength}
          aria-valuemin="0"
          aria-valuemax="4"
          aria-label={`Password strength is ${label}`}>
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-6 border-2 transition-colors duration-200 ${
                i < strength ? "bg-current border-current" : "border-slate-200"
              }`}
              style={{ color: i < strength ? color : undefined }}
              role="presentation"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrengthIndicator;
