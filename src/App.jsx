import "./App.css";
import JobList from "./components/ui/JobList";
import InfiniteScroll from "react-infinite-scroll-component";
import { useJobFetcher } from "./hooks/use-job-fetcher";
import Filters from "./components/Filters";
import { useEffect } from "react";

function App() {
  const { allJobs, loadJobs, hasMore, loading, error } = useJobFetcher();

  useEffect(() => {
    loadJobs(); // Initial fetch when the component mounts & subsequent fetches controlled by infinite scroll
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Filters />
      <InfiniteScroll
        dataLength={allJobs.length}
        next={loadJobs}
        hasMore={hasMore}
        endMessage={<p>No more data to load.</p>}
        style={{ padding: "2px" }}
      >
        {allJobs.length > 0 && <JobList jobs={allJobs} />}
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Loading more jobs...</p>}
    </>
  );
}

export default App;
