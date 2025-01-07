import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Explore from "./components/Explore";
import Blogs from "./components/Blogs";
import What from "./components/What";
import Why from "./components/Why";
import How from "./components/How";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/what" element={<What />} />
        <Route path="/why" element={<Why />} />
        <Route path="/how" element={<How />} />

      </Routes>
    </Router>
  );
};

export default App;
