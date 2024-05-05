import "./App.css";
import { useEffect, useState } from "react";
import Autocomplete from "./components/ui/Autocomplete";
import { JobList } from "./components/JobList/JobList";

const ENDPOINT = "https://api.weekday.technology/adhoc/getSampleJdJSON";

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const data = {
      limit: 10,
      offset: 0,
    };

    const postData = async (url, data) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const jsonResponse = await response.json();
        if (jsonResponse && jsonResponse.jdList) {
          setJobs(jsonResponse.jdList);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    postData(ENDPOINT, data);
  }, []);

  return (
    <>
      <Autocomplete />
      {jobs.length > 0 && <JobList jobs={jobs} />}
    </>
  );
}

export default App;
