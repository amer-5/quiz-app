import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navigation from "./components/navbar.tsx";
import Home from "./pages/home.tsx";
import Guides from "./pages/guides.tsx";
import Leaderboard from "./pages/leaderboard.tsx";
import Quiz from "./pages/quiz.tsx";
import LoginPage from "./pages/login.tsx";

const AppContent = () => {
  const location = useLocation();
  const isLoginOrRegister = ["/login", "/register", "/quiz"].includes(
    location.pathname
  );

  return (
    <>
      {isLoginOrRegister || <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/register" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
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
