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
import CreateQuestion from "./pages/createQuestion.tsx";
import Quiz from "./pages/quiz.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";

const AppContent = () => {
  const location = useLocation();
  const isLoginOrRegister = ["/login", "/register", "/quiz"].includes(
    location.pathname
  );

  return (
    <div className="z-10">
      {isLoginOrRegister || <Navigation />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-question" element={<CreateQuestion />} />
      </Routes>
    </div>
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
