import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { AddEmployee } from "./components/AddEmployee";
import { EditEmployee } from "./components/EditEmployee";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddEmployee />} />
      <Route path="/edit/:id" element={<EditEmployee />} />
    </Routes>
  );
}

export default App;
