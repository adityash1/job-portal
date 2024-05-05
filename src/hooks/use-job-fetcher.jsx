import { useState, useCallback, useEffect } from "react";

export const useJobFetcher = (limit = 10) => {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobs = useCallback(async () => {
    if (loading) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.weekday.technology/adhoc/getSampleJdJSON`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ limit, offset }),
        },
      );
      const jsonResponse = await response.json();
      if (jsonResponse && jsonResponse.jdList) {
        setJobs((prev) => [...prev, ...jsonResponse.jdList]);
        setOffset((prev) => prev + limit);
        setHasMore(jsonResponse.jdList.length === limit);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [offset, loading, limit]);

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { jobs, fetchJobs, hasMore, loading, error };
};
