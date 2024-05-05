import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./JobCard.module.css";

const JobCard = () => {
  return (
    <Card className={styles["card-body"]} elevation={1}>
      <CardContent className={styles["card-content"]}>
        <Box component="div" className={styles["logo-wrapper"]}>
          <Box
            component="img"
            src="https://logo.clearbit.com/dropbox.com"
            width={25}
            height={40}
            alt="logo"
          />
          <div>
            <div className={styles["info-container"]}>
              <Box component="h3">FlexWash Technologies</Box>
              <h2>Senior Engineer</h2>
            </div>
            <p className={styles["cards-sub-text"]}>India | Exp: 5-5 years</p>
          </div>
        </Box>

        <Typography
          variant="body2"
          component="p"
          className={styles["card-salary"]}
        >
          Estimated Salary: ₹30 - 60 LPA ✅
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
                Flex Wash is an operating system for the car wash industry. Our
                solutions help owners manage their operations and grow
                revenue.&nbsp;
              </span>
            </p>
            <p>
              <span style={{ fontWeight: 400, fontSize: "14px" }}>
                Our POS has a built-in CRM, allowing car washes to take
                advantage of their customer transaction history in order to
                funnel customers into subscriptions and higher margin wash
                packages.
              </span>
            </p>
            <p>&nbsp;</p>
            <p>
              <strong style={{ fontSize: "14px" }}>
                Founder/Recruiter profiles:
              </strong>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/chirag-singh-toor-94713aa7/">
                <span style={{ fontWeight: 400 }}>Chirag Singh Toor</span>
              </a>
            </p>
          </Box>
        </Box>

        <Box component="div" className={styles["view-job"]}>
          <a href="https://weekday.works">View job</a>
        </Box>

        <div
          className={`${styles["info-container"]} ${styles["poc-info-container"]}`}
        >
          <h3 style={{ marginTop: "10px" }}>Skills</h3>
          <div
            className={styles["hard-lang-container"]}
            style={{ justifyContent: "start", margin: "0px" }}
          >
            <p className={styles["hard-lang-skill"]}>Typescript</p>
            <p className={styles["hard-lang-skill"]}>Founding Engineer</p>
            <p className={styles["hard-lang-skill"]}>Senior Engineer</p>
          </div>
          <h3 style={{ marginTop: "10px" }}>Minimum Experience</h3>
          <h2>5 years</h2>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
