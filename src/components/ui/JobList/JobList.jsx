import { Grid } from "@mui/material";
import JobCard from "../JobCard";
import styles from "./JobList.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import { useJobFetcher } from "../../../hooks/use-job-fetcher";
import { useEffect } from "react";

const JobList = () => {
  const { allJobs, loadJobs, hasMore, loading, error } = useJobFetcher();

  useEffect(() => {
    loadJobs(); // Initial fetch when the component mounts & subsequent fetches controlled by infinite scroll
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={allJobs.length}
        next={loadJobs}
        hasMore={hasMore}
        endMessage={<p>No more data to load.</p>}
        style={{ padding: "2px" }}
      >
        {allJobs.length > 0 && (
          <Grid
            container
            spacing={{ xs: 3 }}
            className={styles["lay-container"]}
          >
            <Grid item xs={12}>
              <Grid container spacing={{ xs: 3 }}>
                {allJobs.map((job, index) => (
                  <Grid item xs={12} md={6} lg={4} key={index}>
                    <JobCard key={index} job={job} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Loading more jobs...</p>}
    </>
  );
};

export default JobList;
