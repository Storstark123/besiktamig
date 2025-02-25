import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router> {/* Router wraps the entire app */}
      <div className="app">
        <header className="header">
          <h2><Link to="/">BesiktaMig</Link></h2> {/* Makes the title clickable */}
          <LoginLogoutButton isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
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
              <Dashboard onLogout={() => setIsLoggedIn(false)} />
            )
          } />

          {/* Login Page */}
          <Route path="/login" element={<LoginForm onLogin={() => setIsLoggedIn(true)} />} />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={isLoggedIn ? <Dashboard onLogout={() => setIsLoggedIn(false)} /> : <Link to="/">Please log in first</Link>} />
        </Routes>
      </div>
    </Router>
  );
}

// Separate LoginLogoutButton component to handle login/logout logic
function LoginLogoutButton({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate(); // useNavigate hook inside the Router context

  const handleLoginLogout = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      navigate("/"); // Navigate back to home after logging out
    } else {
      navigate("/login"); // Navigate to login page if not logged in
    }
  };

  return (
    <button
      className="login-button"
      onClick={handleLoginLogout}
    >
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export default App;
