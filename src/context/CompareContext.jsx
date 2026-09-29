import { createContext, useContext, useEffect, useState } from "react";

const CompareContext = createContext(null);
const STORAGE_KEY = "estatehaven_compare";
const MAX_COMPARE = 3;

// Wrap your app with <CompareProvider> once (in App.jsx / main.jsx),
// same level as your Router. Persists to localStorage so the
// selection survives a refresh.
export function CompareProvider({ children }) {
  const [compareIds, setCompareIds] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(compareIds));
    } catch {
      // storage unavailable (private browsing etc.) — fail silently
    }
  }, [compareIds]);

  const isComparing = (id) => compareIds.includes(id);
  const maxReached = compareIds.length >= MAX_COMPARE;

  const toggleCompare = (id) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, id];
    });
  };

  const removeFromCompare = (id) =>
    setCompareIds((prev) => prev.filter((x) => x !== id));

  const clearCompare = () => setCompareIds([]);

  return (
    <CompareContext.Provider
      value={{
        compareIds,
        isComparing,
        toggleCompare,
        removeFromCompare,
        clearCompare,
        maxReached,
        maxCompare: MAX_COMPARE,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) {
    throw new Error("useCompare must be used inside <CompareProvider>");
  }
  return ctx;
}