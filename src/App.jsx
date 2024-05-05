// import { useState } from "react";
import "./App.css";
// import { Button } from "@mui/material";
import CustomizedHook from "./Autocomplete";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      {/* <Button
        variant="contained"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </Button> */}
      <CustomizedHook />
    </>
  );
}

export default App;
