import { useEffect, useState } from "react";
import { client } from "./sanity";

// Simple module-level cache so switching tabs doesn't refetch the same query.
const cache = new Map();

/**
 * Fetch a GROQ query from Sanity.
 * @returns {{ data: any, loading: boolean, error: Error|null }}
 */
export function useSanityQuery(query, params) {
  const key = query + "::" + JSON.stringify(params || {});
  const [data, setData] = useState(() => cache.get(key));
  const [loading, setLoading] = useState(() => !cache.has(key));
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;

    if (cache.has(key)) {
      setData(cache.get(key));
      setLoading(false);
      return;
    }

    setLoading(true);
    client
      .fetch(query, params || {})
      .then((res) => {
        cache.set(key, res);
        if (active) {
          setData(res);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error("Sanity fetch failed:", err);
        if (active) {
          setError(err);
          setLoading(false);
        }
      });

    return () => {
      active = false;
    };
  }, [key]);

  return { data, loading, error };
}
