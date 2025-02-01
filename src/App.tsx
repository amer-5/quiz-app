import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/navbar.tsx";
import Home from "./pages/home.tsx";

const AppContent = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<Navigation />} />
        <Route path="/leaderboard" element={<Navigation />} />
        <Route path="/login" element={<Navigation />} />
        <Route path="/register" element={<Navigation />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
