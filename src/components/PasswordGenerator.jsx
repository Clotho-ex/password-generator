import React, { useState, useEffect } from "react";
import PasswordDisplay from "./PasswordDisplay";
import PasswordControls from "./PasswordControls";
import StrengthIndicator from "./StrengthIndicator";
import usePasswordGenerator from "../hooks/usePasswordGenerator";
import LoadingSpinner from "./LoadingSpinner";

const PasswordGenerator = () => {
  const {
    loading,
    password,
    length,
    setLength,
    options,
    setOptions,
    strength,
    generatePassword,
  } = usePasswordGenerator();

  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy password:", err);
    }
  };

  // Add keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter" && e.ctrlKey) {
        generatePassword();
      } else if (e.key === "c" && e.ctrlKey && e.altKey) {
        copyToClipboard();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [generatePassword, copyToClipboard]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <PasswordDisplay
        password={password}
        onCopy={copyToClipboard}
        copied={copied}
      />

      <section
        className="bg-[#334155] p-6 space-y-4 rounded-lg shadow-md"
        aria-label="Password Options">
        <PasswordControls
          length={length}
          setLength={setLength}
          options={options}
          setOptions={setOptions}
        />

        <StrengthIndicator strength={strength} />

        <button
          type="submit"
          onClick={generatePassword}
          disabled={loading}
          className="w-full bg-green-400 hover:bg-green-300 text-slate-900 py-4 font-bold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          {loading ? <LoadingSpinner /> : "GENERATE"}
        </button>
      </section>
    </form>
  );
};

export default PasswordGenerator;
