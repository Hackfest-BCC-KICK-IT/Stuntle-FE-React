import { useState } from "react";

const useLocalStorage = <T>(key: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return JSON.parse(item!);
    } catch (error) {
      console.error("Error retrieving data from localStorage:", error);
    }
  });

  const setValue = (value: T) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
      setStoredValue(value);
    } catch (error) {
      console.error("Error storing data to localStorage:", error);
    }
  };

  const removeValue = () => {
    try {
      localStorage.removeItem(key);

      setStoredValue(null);
    } catch (error) {
      console.error("Error removing data from localStorage:", error);
    }
  };

  return [storedValue, setValue, removeValue] as const;
};

export default useLocalStorage;
