import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import CarListPage from './pages/carlist';
import LandingPage from './pages/landingpage';
import Layout from './components/layout'; // <-- This is key
import FindCarPage from './pages/findcar'; // New main dashboard content
import MyRentalsPage from './pages/myrentals'; // New rentals page
import BookingsPage from './pages/booking'; // New bookings page
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public pages */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Protected/Layout routes */}
        
        <Route element={<Layout />}>
          <Route path="/cars" element={<CarListPage />} />
          <Route path="/find-car" element={<FindCarPage />} />
          <Route path="/rentals" element={<MyRentalsPage />} />
          <Route path="/bookings" element={<BookingsPage />} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
