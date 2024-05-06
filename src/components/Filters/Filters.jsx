import { engineeringRoles, minBasePay, location } from "../../utils/constants";
import { Box } from "@mui/material";
import Autocomplete from "../ui/AutoComplete";
import styles from "./Filters.module.css";

const Filters = () => {
  const filters = [
    { placeholder: "Company Name", options: engineeringRoles, label: "Roles" },
    { placeholder: "Min Experience", options: location, label: "Remote" },
    { placeholder: "Min Base Pay", options: minBasePay, label: "Min Base Pay" },
  ];

  const handleFilterChange = (filterName, value) => {
    console.log("filters ->", filterName, value);
  };

  return (
    <Box component="div">
      <div className={styles["jd-filters-container"]}>
        {filters.map((filter, index) => (
          <Autocomplete
            key={index}
            placeholder={filter.placeholder}
            options={filter.options}
            label={filter.label}
            onChange={(value) => handleFilterChange(filter.label, value)}
          />
        ))}
      </div>
    </Box>
  );
};

export default Filters;
