import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/login';
import SignupPage from './components/signup';
import CarListPage from './components/carlist';
// App.jsx
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cars" element={<CarListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
