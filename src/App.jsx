import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<h2>Home</h2>} />
        <Route path="/movies" element={<h2>Movies</h2>} />
      </Routes>
    </div>
  );
};

export default App;
