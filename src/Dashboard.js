import React, { useState, useEffect } from "react";
import CarForm from "./CarForm"; // CarForm component for adding new cars

function Dashboard({ onLogout }) {
  const [cars, setCars] = useState([]);

  // Load cars from localStorage on component mount
  useEffect(() => {
    const savedCars = JSON.parse(localStorage.getItem("cars")) || []; // Retrieve saved cars or default to an empty array
    setCars(savedCars);
  }, []);

  // Save cars to localStorage whenever the list changes
  useEffect(() => {
    localStorage.setItem("cars", JSON.stringify(cars)); // Save updated cars list to localStorage
  }, [cars]);

  const addCar = (newCar) => {
    setCars([...cars, newCar]); // Add new car to the list
  };

  const removeCar = (index) => {
    const updatedCars = cars.filter((_, i) => i !== index);
    setCars(updatedCars); // Remove the car at the given index
  };

  return (
    <div>
      <CarForm onAddCar={addCar} />

      <h3>Your Cars</h3>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car.regNumber} - {car.model} ({car.year})
            <button onClick={() => removeCar(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
