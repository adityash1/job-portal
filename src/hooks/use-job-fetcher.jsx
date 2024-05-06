import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../features/filters/filtersSlice";

export const useJobFetcher = (limit = 10) => {
  const dispatch = useDispatch();
  const { allJobs, hasMore, loading, error, offset } = useSelector(
    (state) => state.filters
  );

  const loadJobs = () => {
    if (!loading && hasMore) {
      dispatch(fetchJobs({ limit, offset }));
    }
  };

  return { allJobs, loadJobs, hasMore, loading, error };
};
