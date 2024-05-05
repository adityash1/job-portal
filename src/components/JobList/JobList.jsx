import { Grid } from "@mui/material";
import { JobCard } from "../ui/JobCard";
import PropTypes from "prop-types";
import styles from "./JobList.module.css";

export const JobList = ({ jobs }) => {
  return (
    <>
      <Grid container spacing={{ xs: 3 }} className={styles["lay-container"]}>
        <Grid item xs={12} className={styles["list-wrapper"]}>
          <Grid
            container
            spacing={{ xs: 3 }}
            className={styles["list-container"]}
          >
            {jobs.map((job, index) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={index}
                className={`${styles["card-body-grid-parent"]} ${styles["grid-item"]}`}
              >
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
