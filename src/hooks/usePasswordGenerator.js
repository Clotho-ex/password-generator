import { useState, useEffect, useCallback } from "react";

const usePasswordGenerator = () => {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(10);
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: false,
    symbols: false,
  });
  const [strength, setStrength] = useState(0);

  const charSets = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+-=[]{}|;:,.<>?",
  };

  const generatePassword = useCallback(async () => {
    setLoading(true);
    try {
      // Simulate async operation
      await new Promise((resolve) => setTimeout(resolve, 500));

      let chars = "";
      let result = "";

      Object.keys(options).forEach((option) => {
        if (options[option]) {
          chars += charSets[option];
        }
      });

      if (chars) {
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }

      setPassword(result);
    } finally {
      setLoading(false);
    }
  }, [length, options]);

  const calculateStrength = useCallback(() => {
    let score = 0;
    if (length >= 8) score++;
    if (length >= 12) score++;
    if (options.uppercase) score++;
    if (options.lowercase) score++;
    if (options.numbers) score++;
    if (options.symbols) score++;

    // Map 0-6 score range to 0-4 strength range
    setStrength(Math.min(Math.floor((score / 6) * 4), 4));
  }, [length, options]);

  useEffect(() => {
    calculateStrength();
  }, [calculateStrength]);

  return {
    loading,
    password,
    length,
    setLength,
    options,
    setOptions,
    strength,
    generatePassword,
  };
};

export default usePasswordGenerator;
