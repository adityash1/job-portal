import "./App.css";
import Autocomplete from "./components/ui/Autocomplete";

import JobList from "./components/ui/JobList";
import InfiniteScroll from "react-infinite-scroll-component";
import { useJobFetcher } from "./hooks/use-job-fetcher";

function App() {
  const { jobs, fetchJobs, hasMore, loading, error } = useJobFetcher();

  return (
    <>
      <Autocomplete />
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
