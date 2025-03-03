import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load login state from localStorage
  useEffect(() => {
    const storedLoginState = localStorage.getItem("isLoggedIn");
    if (storedLoginState === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Persist login state to localStorage
  const handleLoginLogout = (status) => {
    setIsLoggedIn(status);
    localStorage.setItem("isLoggedIn", status);  // Persist to localStorage
  };

  return (
    <Router basename="/">
      <div className="app">
        <header className="header">
          <h2>BesiktaMig</h2>
          <LoginLogoutButton isLoggedIn={isLoggedIn} handleLoginLogout={handleLoginLogout} />
        </header>

        <Routes>
          {/* Landing Page - When logged out */}
          <Route path="/" element={
            !isLoggedIn ? (
              <div className="container">
                <h1>Glöm inte att besikta bilen</h1>
                <p>Stå inte där som ett fån, få en påminnelse.</p>
                <div className="center-button-container">
                  <Link to="/login">
                    <button className="button">Börja här</button>
                  </Link>
                </div>
              </div>
            ) : (
              <Dashboard onLogout={() => handleLoginLogout(false)} />
            )
          } />

          {/* Login Page */}
          <Route path="/login" element={<LoginForm onLogin={() => handleLoginLogout(true)} />} />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard onLogout={() => handleLoginLogout(false)} /> : <Link to="/">Please log in first</Link>} />
        </Routes>
      </div>
    </Router>
  );
}

// Separate LoginLogoutButton component to handle login/logout logic
function LoginLogoutButton({ isLoggedIn, handleLoginLogout }) {
  const navigate = useNavigate();

  const handleLoginLogoutClick = () => {
    if (isLoggedIn) {
      handleLoginLogout(false);
      navigate("/"); // Navigate back to home after logging out
    } else {
      navigate("/login"); // Navigate to login page if not logged in
    }
  };

  return (
    <button
      className="login-button"
      onClick={handleLoginLogoutClick}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export default App;
