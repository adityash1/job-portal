import { Button, Box, Card, CardContent, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./JobCard.module.css";

const JobCard = ({ job }) => {
  const {
    logoUrl,
    companyName,
    jobRole,
    location,
    minExp,
    maxExp,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    jobDetailsFromCompany,
    jdLink,
  } = job;

  return (
    <Card className={styles["card-body"]} elevation={1}>
      <CardContent className={styles["card-content"]}>
        <Box component="div" className={styles["logo-wrapper"]}>
          <Box
            component="img"
            src={logoUrl}
            width={25}
            height={40}
            alt="logo"
          />
          <div>
            <div className={styles["info-container"]}>
              <Box component="h3">{companyName}</Box>
              <h2>{jobRole}</h2>
            </div>
            <p className={styles["cards-sub-text"]}>
              {location} | Exp: {minExp}-{maxExp} years
            </p>
          </div>
        </Box>

        <Typography
          variant="body2"
          component="p"
          className={styles["card-salary"]}
        >
          {minJdSalary ? `${minJdSalary}K - ` : ""}
          {maxJdSalary}K {salaryCurrencyCode} ✅
        </Typography>

        <Box component="div" className={styles["about-job-wrapper"]}>
          <Typography
            variant="body1"
            component="p"
            className={styles["about-company"]}
          >
            About Company:
          </Typography>

          <Box component="div">
            <p>
              <strong style={{ fontSize: "14px" }}>About us</strong>
            </p>
            <p>
              <span style={{ fontWeight: 400, fontSize: "14px" }}>
                {jobDetailsFromCompany}
              </span>
            </p>
          </Box>
        </Box>

        <Box component="div" className={styles["view-job"]}>
          <a href={jdLink}>View job</a>
        </Box>
      </CardContent>
      <Box component="div" className={styles["status-container"]}>
        <Box component="div" className={styles["apply-btn-wrapper"]}>
          <Button size="medium" className={styles["apply-btn"]}>
            ⚡ Easy Apply
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

JobCard.propTypes = {
  job: PropTypes.shape({
    logoUrl: PropTypes.string,
    companyName: PropTypes.string.isRequired,
    jobRole: PropTypes.string.isRequired,
    location: PropTypes.string,
    minExp: PropTypes.number,
    maxExp: PropTypes.number,
    maxJdSalary: PropTypes.number,
    minJdSalary: PropTypes.number,
    salaryCurrencyCode: PropTypes.string,
    jobDetailsFromCompany: PropTypes.string,
    jdLink: PropTypes.string,
  }).isRequired,
};

export default JobCard;
