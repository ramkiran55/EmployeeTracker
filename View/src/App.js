import PersonalInfo from "./components/hire/personalInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" exact element = {<PersonalInfo/>}></Route>
    </Routes>
  );
}

export default App;
