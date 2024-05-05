import { useReducer, useCallback, useEffect } from "react";

const jobReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: null };
    case "SUCCESS":
      return {
        ...state,
        jobs: [...state.jobs, ...action.payload.jobs],
        offset: state.offset + action.payload.jobs.length,
        hasMore: action.payload.jobs.length === state.limit,
        loading: false,
      };
    case "ERROR":
      return { ...state, error: action.payload, loading: false };
    case "RESET":
      return { ...state, jobs: [], offset: 0, hasMore: true };
    default:
      return state;
  }
};

export const useJobFetcher = (limit = 10) => {
  const initialState = {
    jobs: [],
    offset: 0,
    hasMore: true,
    loading: false,
    error: null,
    limit,
  };

  const [state, dispatch] = useReducer(jobReducer, initialState);

  const fetchJobs = useCallback(async () => {
    if (state.loading) return;

    dispatch({ type: "LOADING" });

    try {
      const response = await fetch(
        `https://api.weekday.technology/adhoc/getSampleJdJSON`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ limit: state.limit, offset: state.offset }),
        }
      );
      const jsonResponse = await response.json();
      if (jsonResponse && jsonResponse.jdList) {
        dispatch({ type: "SUCCESS", payload: { jobs: jsonResponse.jdList } });
      } else {
        dispatch({ type: "ERROR", payload: new Error("No more data") });
      }
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  }, [state.offset, state.loading, state.limit]);

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state, fetchJobs };
};
