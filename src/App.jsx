import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import SavedNews from './pages/SavedNews';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem('jwt'))
  );

  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    localStorage.setItem('jwt', 'fake-jwt-token');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="page">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              isLoggedIn={isLoggedIn}
              onLoginSuccess={handleLoginSuccess}
              onLogout={handleLogout}
            />
          }
        />

        <Route
          path="/saved-news"
          element={<SavedNews onLogout={handleLogout} />}
        />
      </Routes>
    </div>
  );
}

export default App;