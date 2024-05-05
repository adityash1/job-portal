import { engineeringRoles, minBasePay, location } from "../../utils/constants";
import { Box } from "@mui/material";
import Autocomplete from "../ui/AutoComplete";
import styles from "./Filters.module.css";

const Filters = () => {
  return (
    <Box component="div">
      <div className={styles["jd-filters-container"]}>
        <Autocomplete
          placeholder="Company Name"
          options={engineeringRoles}
          label="Roles"
        />
        <Autocomplete
          placeholder="Min Experience"
          options={location}
          label="Remote"
        />
        <Autocomplete
          placeholder="Min Base Pay"
          options={minBasePay}
          label="Min Base Pay"
        />
      </div>
    </Box>
  );
};

export default Filters;
