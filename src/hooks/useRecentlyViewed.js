import { useState, useCallback } from "react";

const STORAGE_KEY = "estatehaven_recent";
const MAX_ITEMS = 6;

const read = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

// Stores the last few viewed property ids in localStorage, newest first.
// No context needed: the details page writes, the listing page reads on mount.
export function useRecentlyViewed() {
  const [ids, setIds] = useState(read);

  const addViewed = useCallback((id) => {
    const next = [id, ...read().filter((x) => x !== id)].slice(0, MAX_ITEMS);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // storage unavailable — fail silently
    }
    setIds(next);
  }, []);

  const clearViewed = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setIds([]);
  }, []);

  return { ids, addViewed, clearViewed };
}