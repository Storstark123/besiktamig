import React, { useState } from 'react';

function AddCar() {
  const [car, setCar] = useState("");
  const [maintenance, setMaintenance] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Car: ${car}, Maintenance: ${maintenance}`);
    // Here, you would add logic to store the new car/reminder in your state or database
  };

  return (
    <div>
      <h2>Add a New Car</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Car Make and Model"
          value={car}
          onChange={(e) => setCar(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Maintenance Task"
          value={maintenance}
          onChange={(e) => setMaintenance(e.target.value)}
          required
        />
        <button type="submit">Add Car/Reminder</button>
      </form>
    </div>
  );
}

export default AddCar;
