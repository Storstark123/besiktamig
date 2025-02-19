import React from 'react';

function Dashboard() {
  return (
    <div className="Dashboard">
      <h1>Welcome back!</h1>
      <h2>Your Cars</h2>
      <ul>
        <li>Honda Civic (Oil Change due in 3 months)</li>
        <li>Ford Mustang (Tire rotation due in 5,000 miles)</li>
      </ul>
      <button className="add-car-button">Add Car</button>
    </div>
  );
}

export default Dashboard;
