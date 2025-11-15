import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useAuth from './hooks/useAuth';
import Layout from './components/Layout';

import HomePage from './pages/Home';
import AboutPage from './pages/About';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import DashboardPage from './pages/Dashboard';

export default function App() {
  const auth = useAuth();

  return (
    <Router>
      <Layout user={auth.user} auth={auth}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage auth={auth} />} />
          <Route path="/register" element={<RegisterPage auth={auth} />} />
          <Route path="/dashboard" element={<DashboardPage user={auth.user} />} />
        </Routes>
      </Layout>
    </Router>
  );
}
