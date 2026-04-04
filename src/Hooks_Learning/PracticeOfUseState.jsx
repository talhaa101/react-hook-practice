import React from 'react'

const PracticeOfUseState = () => {
  const [car, setCar] = React.useState({
    name: "BMW",
    model: "X5",
    year: 2023,
    color: "light gray"
  });

  const UpdateCar = () => {
    setCar(prevCar => ({
      ...prevCar,
      color: "red"
    }));
  }

  return (
    <div>
      <p>I have a Brand New {car.name} {car.model} {car.year} {car.color} car</p>
      <button onClick={UpdateCar}>Update Car</button>
    </div>
  )
}

export default PracticeOfUseState