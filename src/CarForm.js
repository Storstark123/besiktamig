import React, { useState } from "react";

function CarForm({ onAddCar }) {
  const [model, setModel] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCar = { model, regNumber, year };
    onAddCar(newCar); // Call the parent function to add the car to the list
    setModel("");
    setRegNumber("");
    setYear("");
  };

  return (
    <div>
      <h3>Add a Car</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Registration Number"
          value={regNumber}
          onChange={(e) => setRegNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Add Car</button>
      </form>
    </div>
  );
}

export default CarForm;
