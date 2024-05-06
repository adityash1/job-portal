import { filters } from "../../utils/constants";
import { Box } from "@mui/material";
import Autocomplete from "../ui/AutoComplete";
import styles from "./Filters.module.css";
import { useDispatch } from "react-redux";
import { setFilters } from "../../features/filters/filtersSlice";
import { useEffect, useState } from "react";

const Filters = () => {
  const dispatch = useDispatch();
  const [allFilters, setAllFilters] = useState({});

  const handleFilterChange = (filterName, value) => {
    // Merge new filter changes into the existing state
    setAllFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  // Automatically apply filters when allFilters changes
  useEffect(() => {
    if (Object.keys(allFilters).length > 0) {
      console.log("alFilters ->", allFilters);
      dispatch(setFilters(allFilters));
    }
  }, [allFilters, dispatch]);

  return (
    <Box component="div">
      <div className={styles["jd-filters-container"]}>
        {filters.map((filter, index) => (
          <Autocomplete
            key={index}
            options={filter.options}
            label={filter.label}
            onChange={(value) => handleFilterChange(filter.tag, value)}
          />
        ))}
      </div>
    </Box>
  );
};

export default Filters;
