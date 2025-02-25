import React, { useState } from "react";
import LoginForm from "./LoginForm";
import Dashboard from "./Dashboard"; // Import the Dashboard component
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  // Handle login status change
  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowLoginForm(false); // Hide login form when logged out
  };

  // Toggle login form visibility
  const toggleLoginForm = () => setShowLoginForm(!showLoginForm);

  return (
    <div className="app">
      <header className="header">
        <h2>BesiktaMig</h2>
        <button
          className="login-button"
          onClick={isLoggedIn ? handleLogout : toggleLoginForm}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </header>

      {/* Show Login Form if logged out and toggle is true */}
      {!isLoggedIn && showLoginForm && (
        <LoginForm onLogin={handleLogin} />
      )}

      {/* Show content when logged out and login form is hidden */}
      {!isLoggedIn && !showLoginForm && (
        <div className="container">
          <h1>Glöm inte att besikta bilen</h1>
          <p>Stå inte där som ett fån he, få en påminnelse.</p>
          <div className="center-button-container">
            <button className="button">Börja här</button>
          </div>
        </div>
      )}

      {/* Show Dashboard when logged in */}
      {isLoggedIn && <Dashboard onLogout={handleLogout} />}
    </div>
  );
}

export default App;
