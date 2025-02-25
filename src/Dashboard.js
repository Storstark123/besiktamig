import React from "react";
import "./Dashboard.css"; // Import the CSS for dashboard styling

function Dashboard({ onLogout }) {
  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard!</h2>
      <p>Here you can manage your account, view your reminders, and more.</p>
      
      <div className="dashboard-actions">
        <button className="dashboard-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
