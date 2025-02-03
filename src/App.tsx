import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/navbar.tsx";
import Home from "./pages/home.tsx";
import Guides from "./pages/guides.tsx";
import Leaderboard from "./pages/leaderboard.tsx";
import Quiz from "./pages/quiz.tsx";
import QuizPopup from "./components/quizPopup.tsx";

const AppContent = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/login" element={<QuizPopup />} />
        <Route path="/register" element={<Home />} />
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
