import { Grid } from "@mui/material";
import JobCard from "../JobCard";
import PropTypes from "prop-types";
import styles from "./JobList.module.css";

const JobList = ({ jobs }) => {
  return (
    <>
      <Grid container spacing={{ xs: 3 }} className={styles["lay-container"]}>
        <Grid item xs={12}>
          <Grid container spacing={{ xs: 3 }}>
            {jobs.map((job, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <JobCard key={index} job={job} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

JobList.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default JobList;
