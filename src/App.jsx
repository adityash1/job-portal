import "./App.css";
import JobList from "./components/ui/JobList";
import InfiniteScroll from "react-infinite-scroll-component";
import { useJobFetcher } from "./hooks/use-job-fetcher";
import Filters from "./components/Filters";

function App() {
  const { jobs, fetchJobs, hasMore, loading, error } = useJobFetcher();

  return (
    <>
      <Filters />
      <InfiniteScroll
        dataLength={jobs.length}
        next={fetchJobs}
        hasMore={hasMore}
        endMessage={<p>No more data to load.</p>}
        style={{ padding: "2px" }}
      >
        {jobs.length > 0 && <JobList jobs={jobs} />}
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Loading more jobs...</p>}
    </>
  );
}

export default App;
