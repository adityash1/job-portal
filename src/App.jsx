import "./App.css";
import Autocomplete from "./components/ui/Autocomplete";
import { JobCard } from "./components/ui/JobCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Autocomplete />
      <JobCard />
    </>
  );
}

export default App;
