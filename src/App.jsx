import "./App.css";
import Navbar from "./components/universal/Navbar";
import Footer from "./components/universal/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
