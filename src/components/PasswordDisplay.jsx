import React from "react";
import { Copy, Check } from "lucide-react";

const PasswordDisplay = ({
  password = "",
  onCopy = () => {},
  copied = false,
}) => {
  return (
    <output className="bg-[#334155] p-4 flex items-center justify-between rounded-lg shadow-md">
      <input
        type="text"
        readOnly
        value={password}
        aria-label="Generated password"
        className="bg-transparent text-slate-200 text-xl font-mono flex-1 outline-none"
        placeholder="P4$5W0rD!"
      />
      <button
        type="button"
        onClick={onCopy}
        className="ml-4 p-2 text-green-400 hover:text-green-300 transition-colors flex items-center gap-2"
        aria-label={copied ? "Password copied" : "Copy password"}>
        {copied ? (
          <>
            <span className="text-sm font-medium">Copied</span>
            <Check size={20} />
          </>
        ) : (
          <Copy size={20} />
        )}
      </button>
    </output>
  );
};

export default PasswordDisplay;
